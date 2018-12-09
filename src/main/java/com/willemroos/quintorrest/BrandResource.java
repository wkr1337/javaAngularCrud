package com.willemroos.quintorrest;

import java.util.Arrays;
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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@Path("brands")
public class BrandResource 
{
	@Autowired
	BrandDao brandsDao;

	public BrandResource()
	{
		ApplicationContext factory = new AnnotationConfigApplicationContext(AppConfig.class);
		brandsDao = factory.getBean(BrandDao.class);
		
	}
	@GET
	@Produces(MediaType.APPLICATION_JSON) // content negotiation 
	public List<Brands> getBrands() 
	{
		
		
		System.out.println("getBrand called..");
		
		
		return brandsDao.getBrands();
	}
	
	@GET
	@Path("brand/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Brands getBrand(@PathParam("id") int id) 
	{
		return brandsDao.getBrand(id); 
	}
	
	
	
	@GET
	@Path("brand/brandname/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Brands getBrand(@PathParam("name") String name) 
	{
		return brandsDao.getBrandByName(name); 
	}
	
	
	
	
	@POST
	@Path("brand")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Brands createBrand(Brands b1)
	{
		System.out.println(b1);
		brandsDao.create(b1);
		return b1;
	}
	
	@PUT
	@Path("brand")
	@Consumes(MediaType.APPLICATION_JSON)
	public Brands updateBrand(Brands b1)
	{
//		System.out.println(b1);
		if(b1.getId() == 0) 
		{
			brandsDao.create(b1);
		}
		else 
		{
			brandsDao.update(b1);

		}
		
		return b1;
	}
	
	@DELETE
	@Path("brand/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Brands deleteBrand(@PathParam("id") int id)
	{
		Brands b1 = brandsDao.getBrand(id);
		if(b1.getId() != 0)
		{
			brandsDao.delete(id);

		}
		return b1;
	}
}
