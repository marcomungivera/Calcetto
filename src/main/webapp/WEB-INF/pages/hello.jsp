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
			var prova = "a";
		</script>

	</tiles:putAttribute>

	<tiles:putAttribute name="body">


			<h2>${message}</h2>


	</tiles:putAttribute>

</tiles:insertDefinition>