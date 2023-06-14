package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Message;

@RestController
public class RestDemo {
	@GetMapping("/hello")
	public Message sayHello() {
		Message m = new Message();
		m.setName("Joe");
		m.setContent("Welcome to Spring with Docker");
		return m;
	}
	@CrossOrigin
	@GetMapping("/messages")
	public List<Message> getMessages() {
		List<Message> messages= new ArrayList<>();
		Message m = new Message();
		m.setName("Khushi");
		m.setContent("Welcome to Zora's House");
		messages.add(m);
		Message m1 = new Message();
		m1.setName("Grace");
		m1.setContent("Welcome to Zora's House");
		messages.add(m1);
		return messages;
	}
}
