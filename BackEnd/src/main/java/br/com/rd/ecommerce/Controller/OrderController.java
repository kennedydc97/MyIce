package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.dto.OrderDTO;
import br.com.rd.ecommerce.Service.ServiceOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrderController {

    @Autowired
    private ServiceOrder service;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/save-request")
    public ResponseEntity save(@RequestBody OrderDTO request) {

        return ResponseEntity.ok().body(service.save(request));
    }

//    @GetMapping("/find-request/list")
//    public List<Request> find() {
//        return requestRepository.findAll();
//    }
//
//    @GetMapping("/request/findRequestById/{id}")
//    public Request findRequestById(@PathVariable("id") Long id) {
//        return requestRepository.findById(id).get();
//    }
//
//    @DeleteMapping("/delete-request/{id_request}")
//    public void deleteById(@PathParam("id_request") Long idOfRequest) {
//        requestRepository.deleteById(idOfRequest);
//    }
//
//    @PutMapping("/request")
//    public Request modify(@RequestBody Request request) {
//        Request requestEntity = requestRepository.getOne(request.getIdRequest());
//
//        return requestRepository.save(requestEntity);
//    }
}
