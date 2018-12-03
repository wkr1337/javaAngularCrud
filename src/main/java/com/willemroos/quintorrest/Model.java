package com.willemroos.quintorrest;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.beans.factory.annotation.Autowired;
@Entity
@Table(name= "models")
@XmlRootElement
public class Model {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;
	
	@Column(name = "brand_id", nullable=false)
	private int brand_id;


	@ManyToOne(targetEntity = Brands.class, optional=false)
	@JoinColumn(name="brand_id", referencedColumnName="id", insertable=false, updatable=false)
	private Brands brand;
	
	public Model () {
		
		BrandDao brandDao = new BrandDao();
		this.brand = brandDao.getBrand(this.brand_id);
//		System.out.println(this.brand_id);
//		System.out.println("Model constructor: " + this.brand);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	

	public Brands getBrand() {
		return brand;
	}

	public void setBrand(Brands brand) {
		this.brand = brand;
	}
	
	public int getBrand_id() {
		return brand_id;
	}

	public void setBrand_id(int brand_id) {
		this.brand_id = brand_id;
	}

	@Override
	public String toString() {
		return "Model [id=" + id + ", name=" + name + ", brand=[ brand_id= " + brand_id + "]";
	}
}
