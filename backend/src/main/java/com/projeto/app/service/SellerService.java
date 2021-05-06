package com.projeto.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.projeto.app.dto.SellerDTO;
import com.projeto.app.entities.Seller;
import com.projeto.app.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findall() {
		List<Seller> result = repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}

	public Page<SellerDTO> findall(Pageable pageable) {
		Page<Seller> result = repository.findAll(pageable);
		return result.map(x -> new SellerDTO(x));
	}
	
}
