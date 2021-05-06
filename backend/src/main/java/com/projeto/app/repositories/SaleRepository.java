package com.projeto.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.app.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
