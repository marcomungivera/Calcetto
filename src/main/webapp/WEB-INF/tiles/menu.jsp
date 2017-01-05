<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!-- Fixed navbar menu -->
<div class="navbar navbar-default navbar-fixed-top" role="navigation">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="${baseUrl}/"><spring:message code="label.app.title"/></a>
		</div>

		<div class="navbar-collapse collapse">

				<ul class="nav navbar-nav">
					<li></li>
					<li class="dropdown ${mnuLv1Pos == 'Simulazioni'?'active':''}">
						<a href="#" class="dropdown-toggle active"
						   data-toggle="dropdown"><spring:message code="label.app.title"/> <b class="caret"></b></a>
						<ul class="dropdown-menu">

							<li class="${mnuLv2Pos == 'CreaSimulazioneBP'?'active':''}">
								<a href="${baseUrl}/newForwardSimulationBP"><spring:message code="label.app.title"/></a>
							</li>

						</ul>
					</li>

				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#">
							<i class="fa fa-user fa-fw"></i> ${user.matricola}<!-- Benvenuto ${user.nome} ${user.cognome} --> <i class="fa fa-caret-down"></i>
						</a>
						<ul class="dropdown-menu dropdown-user">
							<li><a href="#"><i class="fa fa-user fa-fw"></i> ${user.nome} ${user.cognome}</a></li>
							<li><a href="#"><i class="fa fa-home fa-fw"></i> ${user.societa}</a></li>

							<li class="divider"></li>
							<li><a href="${baseUrl}/j_spring_security_logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
							</li>
						</ul>
					</li>
				</ul>

		</div>
	</div>
</div>
