<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<tiles:insertDefinition name="base.definition" flush="true">

	<tiles:putAttribute name="header">

		<script>
			$(document).ready(function() {
				$("#dataTables-elencoGiocatore").dataTable(globalOptionsDataTable);
			});
		</script>

	</tiles:putAttribute>

	<tiles:putAttribute name="body">

		<div class="container-fluid">
			<div class="text-center">
				<h3><spring:message code="label.pageClassifica.title"/></h3>
			</div>
			<hr/>

			<form:form modelAttribute="form" id="form" method="post" cssClass="form-inline">

				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">
							<spring:message code="label.pageClassifica.title"/></h3>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-md-12">
								<div class="table-responsive">
									<table class="table table-striped table-bordered table-hover" id="dataTables-elencoGiocatore">
										<thead>
										<tr>
											<th><spring:message code="label.pageClassifica.table.header.nome"/></th>
											<th><spring:message code="label.pageClassifica.table.header.media"/></th>
											<th><spring:message code="label.pageClassifica.table.header.punti"/></th>
											<th><spring:message code="label.pageClassifica.table.header.percPresenza"/></th>
											<th><spring:message code="label.pageClassifica.table.header.giocate"/></th>
											<th><spring:message code="label.pageClassifica.table.header.vinte"/></th>
											<th><spring:message code="label.pageClassifica.table.header.vinteConsecutive"/></th>
											<th><spring:message code="label.pageClassifica.table.header.pareggiate"/></th>
											<th><spring:message code="label.pageClassifica.table.header.perse"/></th>
											<th><spring:message code="label.pageClassifica.table.header.perseConsecutive"/></th>
										</tr>
										</thead>
										<tbody style="font-size: 12px">
											<c:forEach items="${elencoGiocatore}" var="giocatore" varStatus="status">
												<td>${giocatore.nome}</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
											</c:forEach>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form:form>
		</div>

	</tiles:putAttribute>

</tiles:insertDefinition>