/**
 * Created by marco on 08/10/14.
 */
/**
 * Check scadenza sessione per redirect alla pagina di login
 */
function isSessionTimedOut(result) {
	var s;
	var retVal = false;
	var dati;

	if (typeof(result.responseText) != "undefined") {
		dati = result.responseText;
	}else if (typeof(result) != "undefined") {
		dati = result;
	}

	if (typeof(dati) != "object" && typeof(dati) != "undefined") {
		s = dati.indexOf("loginForm");
		retVal = s > 0;
	}
	return retVal;
}

function stringDateToDate(date) {
	var dd = date.getDate();
	var mm = date.getMonth() + 1; //January is 0!
	var yyyy = date.getFullYear();
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	var dateString = dd + '/' + mm + '/' + yyyy;
	return dateString;
}

function dateToStringDate(stringDate) { /*format dd-mm-yyyy*/
	var dataArray = stringDate.split("/");
	var data = new Date(dataArray[2], dataArray[1]-1, dataArray[0]);
	return data;
}

function getValoriSelezionatiSingolaCombo(comboSelect) {
	var lista = [];
	comboSelect.each(function(i, selected){
		lista[i] = this.value;
	});
	return lista;
}

function setValoriCaricatiSingolaCombo(comboSelect, datalista) {
	comboSelect.html("");
	jQuery.each(datalista, function (i, item)
	{
		var optionValue, optionDescr;
		optionValue = item;
		optionDescr = item;

		comboSelect.append($('<option>', {
			value: optionValue,
			text: optionDescr
		}));
	});
	comboSelect.multiselect('rebuild');
}

function setValoriCaricatiSingolaComboFromMap(comboSelect, datamap) {
	comboSelect.html("");
	jQuery.each(datamap, function (keyMap, item)
	{
		var optionValue, optionDescr;
		optionValue = keyMap;
		optionDescr = item;

		comboSelect.append($('<option>', {
			value: optionValue,
			text: optionDescr
		}));
	});
	comboSelect.multiselect('rebuild');
}

function selezionaElementiPrecentiSelezionatiSingolaCombo(comboSelect, datalista) {
	var nomeCombo = comboSelect.attr("id");
	for ( var i=0; i< datalista.length; i++) {
		var temp = "#" + nomeCombo + " option[value='" + datalista[i] + "']";
		$(temp).attr("selected","selected");
	}
	comboSelect.multiselect('rebuild');
}

function waitDialogBootstrap() {
	var pleaseWaitDiv = $('' +
	'<div class="modal fade" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="basicModal" aria-hidden="true" tabindex="-1">' +
		'<div class="modal-dialog modal-sm">' +
			'<div class="modal-content">' +
				'<div class="modal-header">Processing...</div>' +
				'<div class="modal-body">' +
					'<div class="progress progress-striped active">' +
						'<div class="progress-bar" style="width: 100%;">' +
							'<span class="sr-only">60% Complete</span>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>');
	return {
		showPleaseWait: function () {
			pleaseWaitDiv.modal();
		},
		hidePleaseWait: function () {
			pleaseWaitDiv.modal('hide');
		}
	};
}

function modalDialogBootstrap() {
	var modalDiv = '' +
	'<div id="msgModal" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">' +
		'<div class="modal-dialog modal-sm">' +
			'<div class="modal-content">' +

				'<div class="modal-header">' +
					'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
					'<h4 class="modal-title" id="msgModalTitle"></h4>' +
				'</div>' +
				'<div id="msgModalBody" class="modal-body"></div>' +

				'<div class="modal-footer">' +
					'<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>';
	return modalDiv;
}

function modalDialogBootstrapMedio() {
	var modalDiv = '' +
		'<div id="msgModal" class="modal fade bs-example-modal-md" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">' +
			'<div class="modal-dialog modal-md">' +
				'<div class="modal-content">' +

				'<div class="modal-header">' +
				'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
				'<h4 class="modal-title" id="msgModalTitle"></h4>' +
				'</div>' +
				'<div id="msgModalBody" class="modal-body"></div>' +

				'<div class="modal-footer">' +
				'<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>' +
				'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
	return modalDiv;
}

function alertMsgModalGenericHtml(title, msg) {
	var modal = modalDialogBootstrap();
	$("#modalGeneric").html("");
	$("#modalGeneric").append("<br>" + modal);
	$('#msgModalTitle').text(title);
	$('#msgModalBody').html(msg);
	$('#msgModal').modal({backdrop: false, keyboard: false});
}

function alertMsgModalGeneric(title, msg) {
	var modal = modalDialogBootstrap();
	$("#modalGeneric").html("");
	$("#modalGeneric").append("<br>" + modal);
	$('#msgModalTitle').text(title);
	$('#msgModalBody').text(msg);
	$('#msgModal').modal({backdrop: false, keyboard: false});
}

function alertMsgModalGenericMedio(title, msg) {
	var modal = modalDialogBootstrapMedio();
	$("#modalGeneric").html("");
	$("#modalGeneric").append("<br>" + modal);
	$('#msgModalTitle').text(title);
	$('#msgModalBody').text(msg);
	$('#msgModal').modal({backdrop: false, keyboard: false});
}

var urlExportChart = "http://opr.risorse.enel/highcharts-export/";

var globalOptionsDatepicker = {
	autoclose: true,
	format: "dd/mm/yyyy",
	todayBtn: "linked",
	language: "it"
}

var globalOptionsDatepickerNoTodayBtn = {
	autoclose: true,
	format: "dd/mm/yyyy",
	language: "it"
}

var globalOptionsMultiselect = {
	maxHeight: 200,
	includeSelectAllOption: true,
	selectedClass: null,
	numberDisplayed: 0,
	buttonClass: 'btn btn-info btn-sm',
	enableFiltering: true,
	enableCaseInsensitiveFiltering: true,
	filterBehavior: 'text',
	buttonWidth: '100%',
	nonSelectedText: labelNessunaSelezione
};

var globalOptionsMultiselectRadio = {
	enableFiltering: true,
	enableCaseInsensitiveFiltering: true,
	maxHeight: 200,
	buttonWidth: '100%',
	selectedClass: null,
	buttonClass: 'btn btn-info btn-sm',
	nonSelectedText: labelNessunaSelezione
};

var globalOptionsDataTable = {
	pageLength: 25,
	language: { url: baseUrl + '/js/dataTables/italian.json' }
};

function saveTableToExcel(table, name) {
	var uri = 'data:application/vnd.ms-excel;base64,'
	, template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
	, base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
	, format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }

	if (!table.nodeType) table = document.getElementById(table)
	var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
	window.location.href = uri + base64(format(template, ctx))
	return false;
}

function saveTableToExcelFileName(table, name, filename) {
	var uri = 'data:application/vnd.ms-excel;base64,'
		, template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
		, base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
		, format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }

	if (table != "") {
		if (!table.nodeType) table = document.getElementById(table)
		$(table).find(':not(:visible)').remove();
		var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
		document.getElementById("exprotData").href = uri + base64(format(template, ctx));
		document.getElementById("exprotData").download = filename;
		document.getElementById("exprotData").click();
	}
	else {
		//alert('No Record Found.');
		alertMsgModalGeneric('Warning', 'No Record Found.');
	}
	return false;
}

function controlloTestSoloNumeri(e) {
	// Allow: backspace, delete, tab, escape, enter and .
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190, 173, 189]) !== -1 ||
			// Allow: Ctrl+A
		(e.keyCode == 65 && e.ctrlKey === true) ||
			// Allow: home, end, left, right
		(e.keyCode >= 35 && e.keyCode <= 39)) {
		// let it happen, don't do anything
		return;
	}
	// Ensure that it is a number and stop the keypress
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
}

function controlloTestSoloNumeriNuovo(event, elmnt) {
	elmnt.val(elmnt.val().replace(/[^\d].+/, ""));
	if (event.which != 8 && (event.which < 48 || event.which > 57)) {
		event.preventDefault();
	}
}

function controlloTestSoloNumeriConDecimali(event, elmnt) {
	elmnt.val(elmnt.val().replace(/[^0-9\.]/g,''));
	if (event.which != 8 && (event.which != 46 || elmnt.val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
		event.preventDefault();
	}
}

function selectItemByValue(elmnt, value){
	for(var i=0; i < elmnt.options.length; i++) {
		if(elmnt.options[i].value === value) {
			elmnt.selectedIndex = i;
			break;
		}
	}
}

function getPropertiesObject(obj){
	var properties = Object.keys(obj);
	return properties;
}

function getValueObject(obj, properties){
	var values = [];
	for (var i = 0; i < properties.length; i++) {
		values.push(obj[properties[i]]);
	}
	return values;
}

function controlloDataConsuntivoDayMeno8(dataRichiesta, msgError){
	var result = true; //Date OK
	var dataAttuale = new Date();
	dataAttuale.setHours(0, 0, 0, 0);
	dataAttuale.setDate(dataAttuale.getDate() - 8);

	if(dataRichiesta > dataAttuale) {
		alertMsgModalGeneric(TESTO_ATTENZIONE, TESTO_ATTENZIONE + " : " + msgError);
		result = false; //Date KO
	}
	return result;
}

function arrotonda(value, numCifreDecimali) {
	var temp = Math.pow(10, numCifreDecimali);
	return Math.round(value * temp) / temp;
}

function formatMigliaiaVirgola(number, decimals, dec_point, thousands_sep, money_sep) {
	var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
	var d = dec_point == undefined ? "." : dec_point;
	var t = thousands_sep == undefined ? "," : thousands_sep, s = n < 0 ? "-" : "";
	var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
	var money = money_sep == undefined ? "" : money_sep + " ";
	return money_sep + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

$(document).ready(function () {

	$('.accordion').on('shown.bs.collapse', function (e) {
		var spanName = $('#' + $(this).data('nomespan'));
		spanName.attr('class', 'glyphicon glyphicon-minus');
	})

	$('.accordion').on('hidden.bs.collapse', function (e) {
		var spanName = $('#' + $(this).data('nomespan'));
		spanName.attr('class', 'glyphicon glyphicon-plus');
	})

})
