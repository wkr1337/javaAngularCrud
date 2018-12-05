package com.willemroos.quintorrest;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import com.willemroos.quintorrest.*;
public class BrandTest {

	
	
	@Test
	public void BrandIdTest() {
		Brands brand = new Brands();
		brand.setId(1);
		assertEquals(1, brand.getId());

	}
	
	@Test
	public void BrandNameTest() {
		Brands brand = new Brands();
		brand.setName("Test123");
		assertEquals("Test123", brand.getName());
	}
	

}
