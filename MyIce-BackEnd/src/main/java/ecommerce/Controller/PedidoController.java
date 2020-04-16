package ecommerce.Controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import ecommerce.Model.Cliente;
import ecommerce.Model.Endereco;
import ecommerce.Model.Pedido;
import ecommerce.Model.Produto;
import ecommerce.Repository.ClienteRepository;
import ecommerce.Repository.EnderecoRepository;
import ecommerce.Repository.PedidoRepository;
import ecommerce.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;

@RestController
public class PedidoController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private PedidoRepository repository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/pedido")
    public Pedido save(@RequestBody Pedido pedido){

        Pedido pedidoGerado = repository.save(pedido);
        Cliente cliente = clienteRepository.findById(pedido.getCliente()).orElse(null);
        Endereco endereco = enderecoRepository.findById(pedido.getEndereco()).orElse(null);
        emailService.sendEmailPedido(cliente, pedidoGerado, endereco);
        return pedidoGerado;

    }
    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/pedidos/lista/{id}")
    public ResponseEntity<List<Pedido>> findPedidosByCliente(@PathVariable("id") Integer id){
        return ResponseEntity.ok().body(repository.findByClienteOrderByDtPedidoDesc(id)); }
    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/pedido/{id}")
    public ResponseEntity<Pedido> findPedidoByCliente(@PathVariable("id") Integer id){
        return ResponseEntity.ok().body(repository.findFirst1ByClienteOrderByDtPedidoDesc(id));
    }

    
    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/pedido/{id_pedido}")
    public void deleteById(@PathVariable("id_pedido") Long idDoPedido){
        repository.deleteById(idDoPedido);
    }


    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/pedido/selecionado/{id}")
    public ResponseEntity<Pedido> findPedidoByIdPedido(@PathVariable("id") Long id){
        return repository.findById(id).map(pedido -> {
            return ResponseEntity.ok().body(pedido);
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("pedidos/lista")
    public ResponseEntity<List<Pedido>> buscarTodosOsPedidos(){
        return ResponseEntity.ok().body(repository.findAll());
    }

    @PutMapping("/pedido/status")
    public ResponseEntity<?> modificar(@RequestBody Pedido pedido){
        try{
            Pedido pedidoEntity = repository.findById(pedido.getIdPedido()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "pedido não encontrado"));
            pedidoEntity.setEndereco(pedido.getEndereco());
            pedidoEntity.setStatus(pedido.getStatus());
            pedidoEntity.setVlTotal(pedido.getVlTotal());
            pedidoEntity.setVlFrete(pedido.getVlFrete());
            pedidoEntity.setFormapgto(pedido.getFormapgto());
            pedidoEntity.setIdPedido(pedido.getIdPedido());
            pedidoEntity.setCliente(pedido.getCliente());
            pedidoEntity.setItemPedido(pedido.getItemPedido());
            pedidoEntity.setDtPedido(pedido.getDtPedido());
            Cliente cliente = clienteRepository.findById(pedido.getCliente()).orElse(null);
            Endereco endereco = enderecoRepository.findById(pedido.getEndereco()).orElse(null);
            emailService.sendEmailPedidoStatus(cliente, pedido, endereco);
            ResponseEntity.ok().body(repository.save(pedidoEntity));
            return ResponseEntity.ok().body(pedidoEntity);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e);
        }
    }

}
