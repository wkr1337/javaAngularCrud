package com.willemroos.quintorrest;

import static org.junit.Assert.*;
import org.junit.Test;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;

public class BrandResourceTest {

	@Test
	public void testBrandResource() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetBrands() {
		RestAssured.get("/lotto").then().assertThat().body("lotto.lottoId", equalTo(5));

	}

	@Test
	public void testGetBrandInt() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetBrandString() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateBrand() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateBrand() {
		fail("Not yet implemented");
	}

	@Test
	public void testDeleteBrand() {
		fail("Not yet implemented");
	}

}
