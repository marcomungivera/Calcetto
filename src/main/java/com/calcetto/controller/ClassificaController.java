package com.calcetto.controller;

import java.util.ArrayList;
import java.util.List;

import com.calcetto.model.Giocatore;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller

public class ClassificaController {

	@RequestMapping(value = "/pageClassifica", method = RequestMethod.GET)
	public String pageClassifica(ModelMap model) {

		model.addAttribute("baseUrl", "/Calcetto");

		List<Giocatore> elencoGiocatore = new ArrayList<Giocatore>();

		Giocatore a = new Giocatore();
		a.setNome("Marco Mungivera");
		elencoGiocatore.add(a);

		model.addAttribute("elencoGiocatore", elencoGiocatore);

		return "classifica";
	}
}