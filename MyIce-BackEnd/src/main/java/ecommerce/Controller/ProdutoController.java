package ecommerce.Controller;

import ecommerce.Model.Produto;
import ecommerce.Repository.ProdutoRepository;
import ecommerce.Service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/produto/{id}")
    public ResponseEntity<Produto> findProdutoById(@PathVariable("id") Long id){ return ResponseEntity.ok().body(repository.findById(id).get()); }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/produto/lista")
    public ResponseEntity<List<Produto>> find(){
        return ResponseEntity.ok().body(repository.findAll());
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/produto/{id_produto}")
    public void deleteById(@PathVariable("id_produto") Long idDoProduto){
        repository.deleteById(idDoProduto);
    }

    @PutMapping("/produto")
    public Produto modify(@RequestBody Produto produto){
        Produto produtoEntity = repository.getOne(produto.getIdProduto());
        produtoEntity.setDescricao(produto.getDescricao());
        produtoEntity.setPrecoCheio(produto.getPrecoCheio());
        produtoEntity.setPrecoDesconto(produto.getPrecoDesconto());
        produtoEntity.setCategoria(produto.getCategoria());
        return repository.save(produtoEntity);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/maisvendidos")
    public ResponseEntity<List<Produto>> buscarMaisVendidos(){
        return ResponseEntity.ok().body(produtoService.buscarProdutosMaisVendidos());
    }

}
