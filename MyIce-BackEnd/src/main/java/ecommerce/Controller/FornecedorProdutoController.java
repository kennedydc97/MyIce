package ecommerce.Controller;

import ecommerce.Model.Fornecedor_Produto;
import ecommerce.Repository.FornecedorProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FornecedorProdutoController {

    @Autowired
    private FornecedorProdutoRepository repository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/fornecedor-produto")
    public Fornecedor_Produto save(@RequestBody Fornecedor_Produto fornecedor_produto){
        return repository.save(fornecedor_produto);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/fornecedor-produto/{id}")
    public Fornecedor_Produto findFornecedorProdutoById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/fornecedor-produto/lista")
    public List<Fornecedor_Produto> find(){
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/fornecedor-produto/{id_fornecedor-produto}")
    public void deleteById(@PathVariable("id_fornecedor-produto") Long idDoFornecedorProduto){
        repository.deleteById(idDoFornecedorProduto);
    }
}
