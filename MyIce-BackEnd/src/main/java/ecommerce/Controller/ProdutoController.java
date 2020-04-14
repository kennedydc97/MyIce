package ecommerce.Controller;

import ecommerce.Model.Categoria;
import ecommerce.Model.Produto;
import ecommerce.Repository.ProdutoRepository;
import ecommerce.Service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @Autowired
    private ProdutoService produtoService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/produto")
    public Produto save(@RequestBody Produto produto){
        return repository.save(produto);
    }

    @GetMapping("/produto/{id}")
    public ResponseEntity buscarId(@PathVariable Integer id) {
        return ResponseEntity.ok().body(repository.findById(id));
    }
    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/produto/lista")
    public ResponseEntity<List<Produto>> find(){
        return ResponseEntity.ok().body(repository.findAll());
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/produto/{id_produto}")
    public void deleteById(@PathVariable("id_produto") Integer idDoProduto){
        repository.deleteById(idDoProduto);
    }

    @PutMapping("/alterar-produto")
    public ResponseEntity<?> atualizar(@RequestBody Produto produto) {

        Produto produtoEntity = repository.findById(produto.getIdProduto())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrada"));

        if (produto.getNome() != null) {
            produtoEntity.setNome(produto.getNome());
        }

        if (produto.getDescricao() != null) {
            produtoEntity.setDescricao(produto.getDescricao());
        }

        if (produto.getPrecoCheio() != null) {
            produtoEntity.setPrecoCheio(produto.getPrecoCheio());
        }

        if (produto.getPrecoDesconto() != null) {
            produtoEntity.setPrecoDesconto(produto.getPrecoDesconto());
        }

        if (produto.getImagem() != null) {
            produtoEntity.setImagem(produto.getImagem());
        }


        if (produto.getCategoria() != null) {
            produtoEntity.setCategoria(produto.getCategoria());
        }

        return ResponseEntity.ok().body(repository.save(produtoEntity));
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/maisvendidos")
    public ResponseEntity<List<Produto>> buscarMaisVendidos(){
        return ResponseEntity.ok().body(produtoService.buscarProdutosMaisVendidos());
    }

}
