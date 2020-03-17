package br.com.rd.ecommerce.Controller;

import br.com.rd.ecommerce.Model.Entity.Group;
import br.com.rd.ecommerce.Repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
public class GroupController {

    @Autowired
    private GroupRepository groupRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create-group")
    public Group save(@RequestBody Group group) {
        return groupRepository.save(group);
    }

    @GetMapping("/group/findById/{id_group}")
    public Group findById(@PathVariable("id_group") Long idOfGroup){
        return groupRepository.findById(idOfGroup).get();
    }

    @GetMapping("/group")
    public Group findGroupById(@PathParam("id") Long id){
        return groupRepository.findById(id).get();
    }

    @DeleteMapping("/delete-group/{id_group}")
    public void deleteById(@PathVariable("id_group") Long idOfGroup) { groupRepository.deleteById(idOfGroup);}

    @PutMapping("/group")
    public Group modify(@RequestBody Group group){
        Group groupEntity = groupRepository.getOne(group.getGroupCode());
        groupEntity.setDescription(group.getDescription());
        return groupRepository.save(groupEntity);
    }

    @GetMapping("/find-group/list")
    public List<Group> find(){ return groupRepository.findAll();  }

}
