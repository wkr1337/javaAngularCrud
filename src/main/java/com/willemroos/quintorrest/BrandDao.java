package com.willemroos.quintorrest;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.sql.*;
public class BrandDao 
{
	List<Brands> brands;
	
//	Connection con = null;
////	Session session = null;
//	SessionFactory sf = null;
	public BrandDao()
	{

		
//		Configuration conf = new Configuration().configure().addAnnotatedClass(Brands.class);
//		
//		sf = conf.buildSessionFactory();
		
		
	}
	
	public List<Brands> getBrands()
	{
Configuration conf = new Configuration().configure().addAnnotatedClass(Brands.class);
		
		SessionFactory sf = conf.buildSessionFactory();
		Session session = sf.openSession();
		List<Brands> brands = session.createCriteria(Brands.class).list();

		
		session.close();
		sf.close();


		return brands;
	}
	
	public Brands getBrandByName(String brandName)
	{
Configuration conf = new Configuration().configure().addAnnotatedClass(Brands.class);
		
		SessionFactory sf = conf.buildSessionFactory();
//		Brands b = new Brands();
		Session session = sf.openSession();
		Query query = session.createQuery("From Brands where name=:name");
		query.setParameter("name", brandName);
		Brands b = (Brands) query.uniqueResult();
		session.close();
		sf.close();


		return b;
	}
	
	public Brands getBrand(int id)
	{
Configuration conf = new Configuration().configure().addAnnotatedClass(Brands.class);
		
		SessionFactory sf = conf.buildSessionFactory();
		Session session = sf.openSession();

		Brands b = new Brands();
		b = session.get(Brands.class, id);
		session.close();
		sf.close();


		return b; 
	}

	public void create(Brands b1) 
	{
Configuration conf = new Configuration().configure().addAnnotatedClass(Brands.class);
		
		SessionFactory sf = conf.buildSessionFactory();
		Session session = sf.openSession();

		session.save(b1);
		session.close();
		sf.close();

		
	}
	public void update(Brands b1) 
	{
Configuration conf = new Configuration().configure().addAnnotatedClass(Brands.class);
		
		SessionFactory sf = conf.buildSessionFactory();
		Session session = sf.openSession();

		Transaction tx = null;
	      try{
	         tx = session.beginTransaction();
	         Brands brand = 
	                    (Brands)session.get(Brands.class, b1.getId()); 
	         brand.setName(b1.getName());;
	         session.update(brand); 
	         tx.commit();
	      }catch (Exception e) {
	         if (tx!=null) tx.rollback();
	         e.printStackTrace(); 
	      }finally {
	         session.close(); 
	 		sf.close();

	      }
		
		
		
	}

	public void delete(int id) 
	{
Configuration conf = new Configuration().configure().addAnnotatedClass(Brands.class);
		
		SessionFactory sf = conf.buildSessionFactory();
		Session session = null;
		Transaction transaction = null;
	      try {

		session = sf.openSession();
		

        transaction = session.getTransaction();
        transaction.begin();
		Brands brand = session.get(Brands.class, id);

		session.delete(brand);
        System.out.println("Customer 1 is deleted");
        transaction.commit();
	      } catch (Exception e) {
	    	  if (transaction != null) {
	    		  transaction.rollback();
	           }
	           e.printStackTrace();
	      }
		session.close(); 
		sf.close();

	}
}
