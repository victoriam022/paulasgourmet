$('#fecha').dateRangePicker(
	{
    parentEl: "#modal-form .modal-body",
		language:'es',
    autoClose: true,
	  singleDate : true,
    singleMonth: true,
	  showShortcuts: false,
    showTopbar: false,
    monthSelect: true,
    yearSelect: function(current) {
        return [current, current + 2];
    },
    startDate: moment().format('YYYY-MM-DD'),
    customArrowPrevSymbol: '<i class="fas fa-arrow-circle-left"></i>',
    customArrowNextSymbol: '<i class="fas fa-arrow-circle-right"></i>'
	}).on('datepicker-opened',function()
  {
    $('#fecha').blur();
  });
