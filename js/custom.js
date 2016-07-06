$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();

		e.preventDefault();
		return false;
	});
});

function calculateAverage() {
	var formData = document.getElementById("formdata");
	var text ="hey";
	marks=[];
	weight=[];
	var sum = 0, counter=0, temp=0, count1=0, count2=0;
	
	for( var i = 0; i < formData.length; i++ ){
		if(formData.elements[i].value!= 0){
			if(i%3==0){
				marks[count1]=formData.elements[i].value;
				count1++;}
			else if(i%3==1){
				weight[count2]=formData.elements[i].value;
				count2++;}
		}
	}
	
	for( var i = 0; i < marks.length; i++ ){
		if (weight.length==marks.length){
			temp=weight[i]/10;}
		if(temp==0){
			temp=1;	
		}
		sum += marks[i]*temp;
		counter+=temp;	
	}
	if(sum!=0 && counter!=0){
		var avg = sum/counter;}
	else{
		avg=0;	
		}
	
	document.getElementById("result").innerHTML =avg;
}
