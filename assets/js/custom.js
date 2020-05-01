$(document).ready(function() {
    
    /*==============Page Loader=======================*/

    $(".loader-wrapper").fadeOut("slow");

    /*===============Page Loader=====================*/

    /*============Dynamic modal content ============*/
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    });
    /*============Dynamic modal content ============*/

    //Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    //Popovers
    $('[data-toggle="popover"]').popover();

    //Dismissed popover
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })

    /*===============Sweet alert =============== */

    $("#show_alert").on('click', function() {
        swal("Hello world!");
    });

    //With title
    $("#show_with_title").on('click', function() {
        swal("Here's the title!", "...and here's the text!");
    });

    //Sweet Alert types
    //Info
    $("#show_alert_info").on('click', function() {
        swal("Info!", "You clicked the button info!", "info");
    });

    //Success
    $("#show_alert_success").on('click', function() {
        swal("Success!", "You clicked the button successfully!", "success");
    });

    //Error
    $("#show_alert_error").on('click', function() {
        swal("Error!", "You clicked the button, problem encountered!", "error");
    });

    //Warning
    $("#show_alert_warning").on('click', function() {
        swal("Warning!", "You clicked the warning button!", "warning");
    });

    //Sweet Alert Promises
    $("#show_alert_promise_one").on('click', function() {
        swal("Click on either the button or outside the modal.")
        .then((value) => {
        swal(`The returned value is: ${value}`);
        });
    });

    $("#show_alert_promise_two").on('click', function() {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
        });
    });

    /*==============Sweet alert===============*/

    /* =========== Alertify notifier ========== */

    $('#alertify_nofify').on('click', function() {
        //using custom CSS
        // .ajs-message.ajs-custom { color: #31708f;  background-color: #d9edf7;  border-color: #31708f; }
        alertify.set('notifier','position', 'bottom-right');
        alertify.notify('custom message.', 'custom', 2, function(){console.log('dismissed');}).dismissOthers();
    });

    $('#alertify_success').on('click', function() {
        alertify.set('notifier','position', 'bottom-right');
        alertify.success('Success notification message.').dismissOthers(); 
    });

    $('#alertify_error').on('click', function() {
        alertify.set('notifier','position', 'bottom-right');
        alertify.error('Error notification message.').dismissOthers();
    });

    $('#alertify_warning').on('click', function() {
        alertify.set('notifier','position', 'bottom-right');
        alertify.warning('Warning notification message.').dismissOthers(); 
    });

    /*Top positioned alert */
    $('#alertify_nofify_top').on('click', function() {
        //using custom CSS
        // .ajs-message.ajs-custom { color: #31708f;  background-color: #d9edf7;  border-color: #31708f; }
        alertify.set('notifier','position', 'top-right');
        alertify.notify('custom message.', 'custom', 2, function(){console.log('dismissed');}).dismissOthers();
    });

    $('#alertify_success_top').on('click', function() {
        alertify.set('notifier','position', 'top-right');
        alertify.success('Success notification message.').dismissOthers(); 
    });

    $('#alertify_error_top').on('click', function() {
        alertify.set('notifier','position', 'top-right');
        alertify.error('Error notification message.').dismissOthers();
    });

    $('#alertify_warning_top').on('click', function() {
        alertify.set('notifier','position', 'top-right');
        alertify.warning('Warning notification message.').dismissOthers(); 
    });

    /*========== Alertify notifier =========== */


    /*===========Bootstrap 4 validation==================*/
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
    /*===========Bootstrap 4 validation==================*/


    /*===========Easy pie chart widget==========*/

    if($('.cw-1').length) {
        $('.cw-1').easyPieChart({
            easing: 'easeOutBounce',
            lineWidth: 20,
            trackWidth: 16,
            barColor: '#002147',
            trackColor: '#ace',
            scaleColor: false,
            lineWidth: 20,
            trackWidth: 16,
            lineCap: 'butt',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }

    /*==========Easy pie chart widget=============*/


    /*============ Echarts widget ================= */

    // Widget One
    if($("#main").length) {
        var myChart = echarts.init(document.getElementById('main'));

        // specify chart configuration item and data
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 2012; i < 2019; i++) {
            xAxisData.push(i);
            data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
        }

        option = {
            title: {
                text: 'Sales analytics',
                textStyle: {
                    fontFamily: 'Quicksand',
                },
            },
            textStyle: {
                fontFamily: 'Quicksand',
            },
            legend: {
                data: ['Pay on delivery', 'Online payments'],
                align: 'left',
                textStyle: {
                    fontFamily: 'Quicksand',
                    fontWeight: '500',
                },
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled'],
                        title: '',
                    },
                    dataView: {
                        title: 'Data view',
                    },
                    saveAsImage: {
                        pixelRatio: 2,
                        title: 'Save',
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: 'Pay on delivery',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'Online payments',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };

        // use configuration item and data specified to show chart
        myChart.setOption(option);
        //Widget one
    }

    
    //Widget 2
    if($("#main2").length) {
        
        var myChart2 = echarts.init(document.getElementById('main2'));
        option2 = {
            title: {
                text: 'Orders pending',
                textStyle: {
                    fontFamily: 'Quicksand',
                },
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {
                        title: 'Refresh',
                    },
                    saveAsImage: {
                        title: 'Save',
                    }
                }
            },
            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: ''}]
                }
            ]
        };
        
        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myChart.setOption(option, true);
        },2000);    

        myChart2.setOption(option2);

        setInterval(function () {
            option2.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myChart2.setOption(option2, true);
        },2000);    
    }
    //Widget 2

    /*============Echarts widget ===================== */
});

/*========== Toggle Sidebar width ============ */
function toggle_sidebar() {
    $('#sidebar-toggle-btn').toggleClass('slide-in');
    $('.sidebar').toggleClass('shrink-sidebar');
    $('.content').toggleClass('expand-content');
    
    //Resize inline dashboard charts
    $('#incomeBar canvas').css("width","100%");
    $('#expensesBar canvas').css("width","100%");
    $('#profitBar canvas').css("width","100%");
}


/*==== Header menu toggle navigation show and hide =====*/

function toggle_dropdown(elem) {
    $(elem).parent().children('.dropdown').slideToggle("fast");
    $(elem).parent().children('.dropdown').toggleClass("animated flipInY");
}

$("body").not(document.getElementsByClassName('dropdown-toggle')).click(function() {
    if($('.dropdown').hasClass('animated')) {
        //$('.dropdown').removeClass("animated flipInY");
    }
});
/*==== Header menu toggle navigation show and hide =====*/


/*==== Sidebar toggle navigation show and hide =====*/

function toggle_menu(ele) {
    //close all ul with children class that are open except the one with the selected id
    $( '.children' ).not( document.getElementById(ele) ).slideUp("Normal");
    $( "#"+ele ).slideToggle("Normal");
    localStorage.setItem('lastTab', ele);
}

function pageLoad() {
    $.each($('.children'), function () {
        let ele = localStorage.getItem('lastTab');
        if ($(this).attr('id') == ele) {
            $( "#"+ele ).slideDown("Normal");
        }
    });
}

pageLoad();

/*==== Sidebar toggle navigation show and hide =====*/

/*==============Switchery ==================*/
//Single switch
if($('.js-single').length) {
    var elem = document.querySelector('.js-single');
    var init = new Switchery(elem);
}

//Multiple switches
if($('.js-switch').length) {
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function(html) {
    var switchery = new Switchery(html);
    });
}

//Switch dynamic states
if($('.js-dynamic-state').length) {
    var elem = document.querySelector('.js-dynamic-state');
    var switcheryDy = new Switchery(elem);

    document.querySelector('.js-dynamic-disable').addEventListener('click', function() {
        switcheryDy.disable();
    });
    
    document.querySelector('.js-dynamic-enable').addEventListener('click', function() {
        switcheryDy.enable();
    });
}

//Colored
if($('.js-secondary').length) { 
    var switchery = new Switchery(document.querySelector('.js-secondary'), { color: '#DDDDDD' });
    var switchery = new Switchery(document.querySelector('.js-primary'), { color: '#0073AA' });
    var switchery = new Switchery(document.querySelector('.js-success'), { color: '#29A744' });
    var switchery = new Switchery(document.querySelector('.js-info'), { color: '#169DB2' });
    var switchery = new Switchery(document.querySelector('.js-warning'), { color: '#F1C40F' });
    var switchery = new Switchery(document.querySelector('.js-danger'), { color: '#ED6A5A' });
    var switchery = new Switchery(document.querySelector('.js-dark'), { color: '#333' });
}

//Switch sizes
if($('.js-small').length) {
    var switcherySm = new Switchery(document.querySelector('.js-small'), { size: 'small' });
    var switcheryLg = new Switchery(document.querySelector('.js-large'), { size: 'large' });
    var switcheryMd = new Switchery(document.querySelector('.js-medium'), { size: 'medium' });
}

/*===============Switchery ====================*/
