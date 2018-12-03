package com.willemroos.quintorrest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("models")

public class ModelResource {

	ModelDao modelDao = new ModelDao();

	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML}) // content negotiation 
	public List<Model> getModels() 
	{
		System.out.println("getModel called..");
		
		
		return modelDao.getModels();
	}
	
	@GET
	@Path("model/{id}")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Model getModel(@PathParam("id") int id) 
	{
		return modelDao.getModel(id); 
	}
	
	@GET
	@Path("brands/{id}")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public List<Model> getModelsByBrandId(@PathParam("id") int id) 
	{
		return modelDao.getModelsByBrandId(id);
	}
	
	
	
//	getModelsByBrandId
	
	@POST
	@Path("model")
	@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Model createModel(Model m1)
	{
		System.out.println(m1);
		modelDao.create(m1);
		return m1;
	}
	
	@PUT
	@Path("model")
	@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Model updateModel(Model m1)
	{
		System.out.println(m1);
		
//			m1 = new Model()
		if(modelDao.getModel(m1.getId()) == null) 
		{
			modelDao.create(m1);
		}
		
		
		else 
		{
			modelDao.update(m1);

		}
		
		return m1;
	}
	
	@DELETE
	@Path("model/{id}")
	public Model deleteModel(@PathParam("id") int id)
	{
		Model m1 = modelDao.getModel(id);
		if(m1 != null)
		{
			modelDao.delete(id);

		}
		return m1;
	}
}
