<!DOCTYPE html>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>

<html lang="it">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" type="image/x-icon" href="${baseUrl}/img/favicon.ico" />
	<title><spring:message code="label.app.title"/></title>

	<!------------------- CSS ------------------->

	<!-- Jquery UI -->
	<link rel="stylesheet" type="text/css" media="screen" href="${baseUrl}/css/jquery-ui.min.css">

	<!-- Bootstrap -->
	<link href="${baseUrl}/css/bootstrap.min.css" rel="stylesheet">
	<link href="${baseUrl}/css/bootstrap-switch.min.css" rel="stylesheet">
	<!-- Sticky footer personalizzato -->
	<link href="${baseUrl}/css/sticky-footer-navbar.css" rel="stylesheet">

	<!-- SB Admin CSS - Include with every page -->
	<link rel="stylesheet" type="text/css" media="screen" href="${baseUrl}/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="${baseUrl}/css/sb-admin.css">

	<!-- Page-Level Plugin CSS - Tables -->
	<link rel="stylesheet" type="text/css" media="screen" href="${baseUrl}/css/dataTables/dataTables.bootstrap.css">


	<!------------------- JAVASCRIPT ------------------->

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="${baseUrl}/js/jquery-2.1.0.min.js"></script>
	<!-- Jquery UI -->
	<script src="${baseUrl}/js/jquery-ui.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="${baseUrl}/js/bootstrap.min.js"></script>

	<!-- Altro JS -->
	<script src="${baseUrl}/js/dataTables/jquery.dataTables.js"></script>
	<script src="${baseUrl}/js/dataTables/dataTables.bootstrap.js"></script>
	<script src="${baseUrl}/js/dataTables/datetime-moment-2014-12-18.js"></script>
	<script src="${baseUrl}/js/moment-with-locales-2.9.0.js"></script>


	<script>
		var baseUrl = "${baseUrl}";
	</script>

	<script src="${baseUrl}/js/utilities.js?$$REVISION$$"></script>
	<link rel="stylesheet" type="text/css" media="screen" href="${baseUrl}/css/utilities.css">

	<tiles:insertAttribute name="header"/>

</head>
<body>
<tiles:insertAttribute name="menu"/>

<tiles:insertAttribute name="body"/>

<!-- alert modale -->
<div id="modalGeneric"></div>

<tiles:insertAttribute name="footer"/>

</body>
</html>