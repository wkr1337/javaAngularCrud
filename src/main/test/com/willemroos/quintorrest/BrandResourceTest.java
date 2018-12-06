package com.willemroos.quintorrest;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import org.json.JSONObject;
import org.junit.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class BrandResourceTest {

	@Test
	public void testBrandResource() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetBrands() {
		get("http://localhost:8081/quintorrest/webapi/brands").then().assertThat().body("id", hasItems(1, 2, 3, 4, 5));

	}

	@Test
	public void testGetBrandInt() {
		get("http://localhost:8081/quintorrest/webapi/brands/brand/1").then().assertThat().body("id", equalTo(1), "name", equalTo("BMW"));

	}

	@Test
	public void testGetBrandString() {
		get("http://localhost:8081/quintorrest/webapi/brands/brand/getname/BMW").then().assertThat().body("id", equalTo(1), "name", equalTo("BMW"));
	}

	@Test
	public void testCreateBrand() {
		RequestSpecification request = RestAssured.given();	
	   JSONObject jsonObj = new JSONObject();
	   jsonObj.put("name", "testBrandName");
	   System.out.println(jsonObj);
	   given().contentType("application/json").body(jsonObj.toString())
	   .when().post("http://localhost:8081/quintorrest/webapi/brands/brand")
	   .then()
	      .assertThat()
	      .body("name", equalTo("testBrandName"));

	
	}

	@Test
	public void testUpdateBrand() {
		fail("Not yet implemented");
	}

	@Test
	public void testDeleteBrand() {
		int brandId = given().contentType("application/json").get("http://localhost:8081/quintorrest/webapi/brands/brand/getname/testBrandName").path("id");
		delete("http://localhost:8081/quintorrest/webapi/brands/brand/" + brandId).then().assertThat().body("id", equalTo(brandId), "name", equalTo("testBrandName"));
	}

}
