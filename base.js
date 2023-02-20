$(function() {
  $("#form").submit(function(event) {
      if (validateForm()) {
        return;
      }
      event.preventDefault();
  });
});

function renderErrors(errors) {
  $("#errors").html('');

  errors.forEach(
    error => $("#errors").append(`<div> &raquo; ${error}</div>`)
  );

  $("#errors").show();
}

function validateForm() {
	const errors = [];

	if (!$("#full-name").val()) {
		errors.push("Lauks 'Vārs, Uzvārds' ir jānorāda obligāti");
	}
	if (!$("#phone").val()) {
		errors.push("Lauks 'Telefona numurs' ir jānorāda obligāti");
	}
	if (!$("#message").val()) {
		errors.push("Lauks 'Ziņojums' ir jānorāda obligāti");
	}

  if (errors.length) {
    renderErrors(errors);
    return false;
  }

  return true;
}
