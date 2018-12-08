package com.willemroos.quintorrest;

import java.sql.Connection;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class ModelDao {
	Connection con = null;
	SessionFactory sf = null;

	public ModelDao() {
		Configuration conf = new Configuration().configure().addAnnotatedClass(Model.class);
		sf = conf.buildSessionFactory();
	}
	
	
	
	
	public List<Model> getModels() {
		Session session = sf.openSession();
		List<Model> models = session.createCriteria(Model.class).list();
	
		session.close();
		return models;
	}
	
	public List<Model> getModelsByBrandId(int brandId)
	{
		
		Session session = sf.openSession();
		Query query = session.createQuery("From Model where brand_id=:brandId");
		query.setParameter("brandId", brandId);
		List<Model> modelList = query.list();
		session.close();
//		sf.close();

		return modelList;
	}

	public Model getModel(int id) {
		Session session = sf.openSession();
		Model model1 = new Model();
		model1 = session.get(Model.class, id);
		session.close();
		return model1;
	}

	public void create(Model model1) {
		Session session = sf.openSession();
//		System.out.println(model1.getBrand());
		session.save(model1);
		session.close();
		
	}

	public void update(Model model1) {
		Session session = sf.openSession();

		Transaction tx = null;
	      try{
	         tx = session.beginTransaction();
	         Model model2 = 
	                    (Model)session.get(Model.class, model1.getId()); 
	         model2.setName(model1.getName());
	         model2.setBrand_id(model1.getBrand_id());
	         session.update(model2); 
	         tx.commit();
	      }catch (Exception e) {
	         if (tx!=null) tx.rollback();
	         e.printStackTrace(); 
	      }finally {
	         session.close(); 
	      }		
	}

	public void delete(int id) {
		Session session = sf.openSession();
	
        Transaction transaction = session.getTransaction();
        transaction.begin();
        Model model1 = session.get(Model.class, id);
		session.delete(model1);

		transaction.commit();
        session.close();
	}

}
