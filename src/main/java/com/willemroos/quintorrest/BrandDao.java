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
	
	Connection con = null;
//	Session session = null;
	SessionFactory sf = null;
	public BrandDao()
	{
//		String url = "jdbc:mysql://localhost:3306/quintor";
//		String username = "root";
//		String password = "";
//		try 
//		{
//			Class.forName("com.mysql.jdbc.Driver");
//			con = DriverManager.getConnection(url, username, password);
//		}
//		catch (Exception e) {
//			System.out.println(e);
////			e.printStackTrace();
//		}
		
		
		Configuration conf = new Configuration().configure().addAnnotatedClass(Brands.class);
//		conf.configure("hibernate.cfg.xml");

		sf = conf.buildSessionFactory();
		
//		session.save(object)
//		session.close();
		
	}
	
	public List<Brands> getBrands()
	{
		Session session = sf.openSession();

//		List<Brands> brands = (List<Brands>) session.createQuery("FROM brands");
		List<Brands> brands = session.createCriteria(Brands.class).list();
//		List<Brands> brands = new ArrayList<>();
//		String sql = "SELECT * FROM brands";
//		try {
//			Statement st = con.createStatement();
//			ResultSet rs = st.executeQuery(sql);
//			while(rs.next())
//			{
//				Brands b = new Brands();
//				b.setId(rs.getInt(1));
//				b.setName(rs.getString(2));
//				
//				brands.add(b);
//				
//			}
//			
//		} catch (Exception e) {
//			System.out.println(e);
////			e.printStackTrace();
//		}
		
		session.close();

		return brands;
	}
	
	public Brands getBrandByName(String brandName)
	{
//		Brands b = new Brands();
		Session session = sf.openSession();
		Query query = session.createQuery("From Brands where name=:name");
		query.setParameter("name", brandName);
		Brands b = (Brands) query.uniqueResult();
		return b;
	}
	
	public Brands getBrand(int id)
	{
		Session session = sf.openSession();

//		String sql = "SELECT * FROM brands WHERE id="+id;
		Brands b = new Brands();
		b = session.get(Brands.class, id);
		session.close();
	//	sf.close();
//
//		try {
//			Statement st = con.createStatement();
//			ResultSet rs = st.executeQuery(sql);
//			if(rs.next())
//			{
//				b.setId(rs.getInt(1));
//				b.setName(rs.getString(2));
//				
//				
//			}
//			
//		} catch (Exception e) {
//			System.out.println(e);
//		}
		return b; 
	}

	public void create(Brands b1) 
	{
		Session session = sf.openSession();

//		String sql = "INSERT INTO brands (name) VALUES(?)";
//		try {
////			PreparedStatement st = con.prepareStatement(sql);
////			st.setString(1, b1.getName());
////			st.executeUpdate();
//			
//			
//		} catch (Exception e) {
//			System.out.println(e);
//		}
		session.save(b1);
		session.close();
		
	}
	public void update(Brands b1) 
	{
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
	      }
		
		
		
		
//		String sql = "UPDATE brands set name=? where id=?";
//		try {
//			PreparedStatement st = con.prepareStatement(sql);
//			st.setString(1, b1.getName());
//			st.setInt(2, b1.getId());
//			st.executeUpdate();
//			
//			
//		} catch (Exception e) {
//			System.out.println(e);
//		}
	      
		
	}

	public void delete(int id) 
	{
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


//		String sql = "DELETE FROM brands where id=?";
//		try {
//			PreparedStatement st = con.prepareStatement(sql);
//			st.setInt(1, id);
//			st.executeUpdate();
//			
//			
//		} catch (Exception e) {
//			System.out.println(e);
//		}
	}
}
