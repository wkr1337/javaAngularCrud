package com.willemroos.quintorrest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

	@Bean
	public BrandDao getBrandsDao() 
	{
		return new BrandDao();
	}
	
	@Bean
	public Brands getBrands()
	{
		return new Brands();
	}
}
