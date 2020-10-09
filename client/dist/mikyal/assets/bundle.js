$('.tooltiprapper').click(function (e) { 
	e.preventDefault();
	$(this).find('.tooltip').toggleClass('tooltip__active')
	console.log('mukto');
});


! function (e) {
	var t = {};

	function o(a) {
		if (t[a]) return t[a].exports;
		var s = t[a] = {
			i: a,
			l: !1,
			exports: {}
		};
		return e[a].call(s.exports, s, s.exports, o), s.l = !0, s.exports
	}
	o.m = e, o.c = t, o.d = function (e, t, a) {
		o.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: a
		})
	}, o.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, o.t = function (e, t) {
		if (1 & t && (e = o(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var a = Object.create(null);
		if (o.r(a), Object.defineProperty(a, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var s in e) o.d(a, s, function (t) {
				return e[t]
			}.bind(null, s));
		return a
	}, o.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return o.d(t, "a", t), t
	}, o.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, o.p = "", o(o.s = 0)
}([function (e, t, o) {
	"use strict";
	o.r(t);
	var a, s;
	o(1), o(2);
	a = jQuery, s = {
		right_sidebar: function () {
			a(".right-sidebar-show").on("click", (function (e) {
				e.stopPropagation(), a(".right-sidebar").addClass("active scroll_style__gray"), a("body").addClass("active"), a(".menu-close, .menu-nav, .menu-logo, .menu-show, .header-menu-show, .header-menu-close, .header-menu-content").removeClass("active"), a("body").removeClass("sidebar-active")
			})), a(".close-right-sidebar").on("click", (function () {
				a(".right-sidebar").removeClass("active scroll_style__gray"), a("body").removeClass("active")
			})), a(".project-wrapper .right-sidebar-show").on("click", (function () {
				a("body").removeClass("active")
			}))
		},
		toggole_menu: function () {
			a(".menu-show").on("click", (function (e) {
				e.stopPropagation(), a(this).addClass("active"), a(".menu-close").addClass("active"), a(".menu-nav").addClass("active"), a(".menu-logo").addClass("active"), a("body").addClass("sidebar-active"), a(".right-sidebar-show, .header-menu-show, .header-menu-close, .header-menu-content").removeClass("active"), a(".right-sidebar").removeClass("active scroll_style__gray")
			})), a(".menu-close").on("click", (function () {
				a(this).removeClass("active"), a(".menu-show").removeClass("active"), a(".menu-nav").removeClass("active"), a(".menu-logo").removeClass("active"), a("body").removeClass("sidebar-active")
			}))
		},
		tab_click: function () {
			a(".visitors-choice li").click((function () {
				var e = a(this),
					t = e.index();
				e.parents(".information_list-item").children(".information_list-item-header").children(".protfolio-tab").children().eq(t).addClass("active").siblings().removeClass("active"), e.addClass("active").siblings().removeClass("active")
			}))
		},
		toggole_menu_top: function () {
			a(".header-menu-show").on("click", (function (e) {
				e.stopPropagation(), a(this).addClass("active"), a(".header-menu-close").addClass("active"), a(".header-menu-content").addClass("active"), a("body").addClass("active"), a(".menu-close, .menu-nav, .menu-logo, .menu-show , .right-sidebar-show").removeClass("active"), a(".right-sidebar").removeClass("active scroll_style__gray"), a("body").removeClass("sidebar-active")
			})), a(".header-menu-close").on("click", (function () {
				a(this).removeClass("active"), a(".header-menu-show").removeClass("active"), a(".header-menu-content").removeClass("active"), a(".menu-nav").removeClass("active"), a("body").removeClass("active")
			}))
		},
		scramboard: function () {
			a(".sbc-add-card").on("click", (function (e) {
				e.stopPropagation(), a(this).parents("body").find(".acme-aplication-overlay").addClass("active"), a("body").addClass("active")
			})), a(".btn-popup-close").on("click", (function (e) {
				e.stopPropagation(), a(".acme-aplication-overlay").removeClass("active"), a("body").removeClass("active")
			}))
		},
		btn_new_contact: function () {
			a(".btn-new-contact").on("click", (function (e) {
				e.stopPropagation(), a(this).parents("body").find(".new-contact-overlay").addClass("active")
			})), a(".btn-popup-close").on("click", (function (e) {
				e.stopPropagation(), a(this).parents("body").find(".new-contact-overlay").removeClass("active")
			}))
		},
		add_client_btn: function () {
			a(".Summary-btn").on("click", (function (e) {
				e.stopPropagation(), a(this).parents("body").find(".summary-area").addClass("active"), a(this).parents("body").find(".Portal-area").removeClass("active"), a(this).parents("body").find(".project-page").addClass("active"), a(this).parents("body").find(".setting-page").removeClass("active"), a(this).parents("body").find(".Add-Invoice-page").removeClass("active")
			})), a(".back-to-sumary").on("click", (function (e) {
				e.stopPropagation(), a(this).parents("body").find(".summary-area").removeClass("active"), a(this).parents("body").find(".Portal-area").addClass("active"), a(this).parents("body").find(".project-page").addClass("active"), a(this).parents("body").find(".setting-page").removeClass("active"), a(this).parents("body").find(".Add-Invoice-page").removeClass("active")
			})), a(".clint-dtls").on("click", (function (e) {
				e.stopPropagation(), a(this).parents(".addprojectstep4").find(".client-dtls").toggleClass("active")
			}))
		},
		sticky_header: function () {
			a(window).scroll((function () {
				a(window).scrollTop() > 40 ? a(".header-menu").addClass("sticky-nav") : a(".header-menu").removeClass("sticky-nav")
			}))
		},
		date_picker: function () {
			a(".date-pickers").daterangepicker({
				singleDatePicker: !0,
				showDropdowns: !0,
				minYear: 1901,
				maxYear: parseInt(moment().format("YYYY"), 10)
			})
		},
		check_box: function () {
			a('input[type="checkbox"]').click((function () {
				1 == a(this).prop("checked") ? a(this).parents("li").addClass("active") : 0 == a(this).prop("checked") && a(this).parents("li").removeClass("active")
			}))
		},
		drag_drop: function () {
			a("#shorttable1, #shorttable2, #shorttable3, #shorttable4, #shorttable5").sortable({
				connectWith: ".sbc-single-card-wrapper"
			}).disableSelection(), a("#timepicker1").mdtimepicker(), a("#timepicker2").mdtimepicker(), a(".calender-event-click").on("click", (function (e) {
				e.stopPropagation(), a(this).parents("body").find(".todo-overlay").addClass("active")
			})), a(".btn-popup-close").on("click", (function (e) {
				e.stopPropagation(), a(this).parents("body").find(".todo-overlay").removeClass("active")
			}))
		},
		stopPropagationElements: function () {
			a(".right-sidebar, .menu-nav, .acme-aplication-overlay, .todo-overlay, .all-task-dropdawn ").click((function (e) {
				e.stopPropagation()
			}))
		},
		elementHide: function () {
			a(document).click((function () {
				a("body , .acme-aplication-overlay").removeClass("active , sidebar-active"), a(".right-sidebar").removeClass("active scroll_style__gray"), a(".menu-nav, .menu-close, .menu-show, .menu-logo, .header-menu-content, .header-menu-show,.header-menu-close, .todo-overlay").removeClass("active")
			}))
		},
		init: function () {
			s.right_sidebar(), s.toggole_menu(), s.sticky_header(), s.toggole_menu_top(), s.tab_click(), s.check_box(), s.date_picker(), s.drag_drop(), s.scramboard(), s.stopPropagationElements(), s.elementHide()
		}
	}, a(document).ready((function () {
		s.init()
	})), document.addEventListener("DOMContentLoaded", (function () {
		var e = document.getElementById("full-calendar");
		new FullCalendar.Calendar(e, {
			timeZone: "UTC",
			headerToolbar: {
				left: "title,prev,next",
				center: "",
				right: "dayGridMonth,timeGridWeek,timeGridDay"
			},
			editable: !0,
			dayMaxEvents: !0,
			events: "https://fullcalendar.io/demo-events.json?overload-day"
		}).render()
	}));
	var r = function (e) {
		e.currentTarget.querySelector(".tooltip ").classList.toggle("tooltip__active")
	};
	document.querySelectorAll(".export_btn").forEach((function (e) {
		e.addEventListener("click", r)
	})), document.querySelector(".btn-new-project").addEventListener("click", (function () {
		document.querySelector(".create-project__overlay").classList.toggle("active")
	})), document.querySelector(".btn-popup-close").addEventListener("click", (function () {
		document.querySelector(".create-project__overlay").classList.remove("active")
	})), document.querySelector(".btn-new-contact").addEventListener("click", (function () {
		document.querySelector(".new-contact-overlay").classList.toggle("active")
	})), document.querySelector(".contact-popup-close").addEventListener("click", (function () {
		document.querySelector(".new-contact-overlay").classList.remove("active")
	})), document.querySelector(".next-project").addEventListener("click", (function () {
		document.querySelector(".setting-page").classList.add("active"), document.querySelector(".project-page").classList.add("active")
	})), document.querySelector(".Add-Invoice").addEventListener("click", (function () {
		document.querySelector(".project-page").classList.add("active"), document.querySelector(".Add-Invoice-page").classList.add("active"), document.querySelector(".setting-page").classList.remove("active")
	})), document.querySelector(".add-portal-btn").addEventListener("click", (function () {
		document.querySelector(".Portal-area").classList.add("active"), document.querySelector(".project-page").classList.add("active"), document.querySelector(".setting-page").classList.remove("active"), document.querySelector(".Add-Invoice-page").classList.remove("active")
	})), document.querySelector(".Summary-btn").addEventListener("click", (function () {
		document.querySelector(".summary-area").classList.add("active"), document.querySelector(".project-page").classList.add("active"), document.querySelector(".Portal-area").classList.remove("active"), document.querySelector(".setting-page").classList.remove("active"), document.querySelector(".Add-Invoice-page").classList.remove("active")
	})), document.querySelector(".back-to-invoice").addEventListener("click", (function () {
		document.querySelector(".Portal-area").classList.remove("active"), document.querySelector(".Add-Invoice-page").classList.remove("active"), document.querySelector(".project-page").classList.add("active"), document.querySelector(".setting-page").classList.add("active")
	})), document.querySelector(".back-to-project").addEventListener("click", (function () {
		document.querySelector(".Add-Invoice-page").classList.remove("active"), document.querySelector(".project-page").classList.remove("active"), document.querySelector(".setting-page").classList.remove("active")
	})), document.querySelector(".back-to-portal").addEventListener("click", (function () {
		document.querySelector(".Portal-area").classList.remove("active"), document.querySelector(".setting-page").classList.remove("active"), document.querySelector(".project-page").classList.add("active"), document.querySelector(".Add-Invoice-page").classList.add("active")
	})), document.querySelector(".back-to-sumary").addEventListener("click", (function () {
		document.querySelector(".summary-area").classList.remove("active"), document.querySelector(".setting-page").classList.remove("active"), document.querySelector(".Add-Invoice-page").classList.remove("active"), document.querySelector(".Portal-area").classList.add("active"), document.querySelector(".project-page").classList.add("active")
	})), document.querySelector(".clint-dtls").addEventListener("click", (function () {
		document.querySelector(".client-dtls").classList.toggle("active")
	}));
	var c = {
			series: [{
				name: "",
				data: [1, 2, 1.5, 1.8, 1.5, 3, 3.6]
			}],
			chart: {
				height: 150,
				type: "line",
				zoom: {
					enabled: !1
				},
				toolbar: {
					show: !1
				}
			},
			dataLabels: {
				enabled: !1
			},
			stroke: {
				curve: "straight",
				width: 2
			},
			grid: {
				show: !1,
				xaxis: {
					lines: {
						show: !1
					}
				},
				column: {
					colors: ["#2C2C2E", "#2C2C2E"]
				}
			},
			xaxis: {
				categories: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				lines: {
					show: !1
				},
				labels: {
					style: {
						colors: "#9A9AB5",
						fontSize: "16px",
						fontFamily: "Source Sans Pro",
						fontWeight: 400,
						cssClass: "apexcharts-xaxis-label"
					}
				},
				axisBorder: {
					show: !1
				},
				axisTicks: {
					show: !1
				},
				tooltip: {
					enabled: !0
				},
				crosshairs: {
					show: !0
				}
			},
			yaxis: {
				show: !1
			},
			colors: ["#546AE4"],
			markers: {
				size: 1.5,
				colors: "#2C2C2E",
				strokeColors: "#546AE4",
				strokeWidth: 3,
				strokeOpacity: .9,
				strokeDashArray: 0,
				fillOpacity: 0,
				discrete: [],
				shape: "circle",
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: void 0,
				onDblClick: void 0,
				showNullDataPoints: !0,
				hover: {
					size: 4
				}
			},
			tooltip: {
				enabled: !0,
				custom: function (e) {
					var t = e.series,
						o = e.seriesIndex,
						a = e.dataPointIndex;
					e.w;
					return '<div class="apexcharts-tooltip-custom">'.concat('<span class="apexcharts-tooltip-custom__circle"></span><span class="apexcharts-tooltip-custom__line"></span><span>$').concat(t[o][a], "</span></div>")
				},
				style: {
					fontSize: "16px",
					fontFamily: "Source Sans Pro"
				},
				onDatasetHover: {
					highlightDataSeries: !1
				},
				x: {
					show: !1
				},
				marker: {
					show: !0
				}
			}
		},
		i = document.querySelector("#dashboard-chart-total");
	i && new ApexCharts(i, c).render();
	var n = {
			series: [{
				name: "",
				data: [1, 2, 1.5, 1.8, 1.5, 3, 3.6]
			}],
			chart: {
				height: 150,
				type: "line",
				zoom: {
					enabled: !1
				},
				toolbar: {
					show: !1
				}
			},
			dataLabels: {
				enabled: !1
			},
			stroke: {
				curve: "straight",
				width: 2
			},
			grid: {
				show: !1,
				xaxis: {
					lines: {
						show: !1
					}
				},
				column: {
					colors: ["#2C2C2E", "#2C2C2E"]
				}
			},
			xaxis: {
				categories: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				lines: {
					show: !1
				},
				labels: {
					style: {
						colors: "#9A9AB5",
						fontSize: "16px",
						fontFamily: "Source Sans Pro",
						fontWeight: 400,
						cssClass: "apexcharts-xaxis-label"
					}
				},
				axisBorder: {
					show: !1
				},
				axisTicks: {
					show: !1
				},
				tooltip: {
					enabled: !0
				},
				crosshairs: {
					show: !0
				}
			},
			yaxis: {
				show: !1
			},
			colors: ["#546AE4"],
			markers: {
				size: 1.5,
				colors: "#2C2C2E",
				strokeColors: "#546AE4",
				strokeWidth: 3,
				strokeOpacity: .9,
				strokeDashArray: 0,
				fillOpacity: 0,
				discrete: [],
				shape: "circle",
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: void 0,
				onDblClick: void 0,
				showNullDataPoints: !0,
				hover: {
					size: 4
				}
			},
			tooltip: {
				enabled: !0,
				custom: function (e) {
					var t = e.series,
						o = e.seriesIndex,
						a = e.dataPointIndex;
					e.w;
					return '<div class="apexcharts-tooltip-custom">'.concat('<span class="apexcharts-tooltip-custom__circle"></span><span class="apexcharts-tooltip-custom__line"></span><span>$').concat(t[o][a], "</span></div>")
				},
				style: {
					fontSize: "16px",
					fontFamily: "Source Sans Pro"
				},
				onDatasetHover: {
					highlightDataSeries: !1
				},
				x: {
					show: !1
				},
				marker: {
					show: !0
				}
			}
		},
		l = document.querySelector("#dashboard-chart-total-cost");
	l && new ApexCharts(l, n).render();
	var d = {
			series: [{
				name: "",
				data: [1, 2, 1.5, 1.8, 1.5, 3, 3.6]
			}],
			chart: {
				height: 150,
				type: "line",
				zoom: {
					enabled: !1
				},
				toolbar: {
					show: !1
				}
			},
			dataLabels: {
				enabled: !1
			},
			stroke: {
				curve: "straight",
				width: 2
			},
			grid: {
				show: !1,
				xaxis: {
					lines: {
						show: !1
					}
				},
				column: {
					colors: ["#2C2C2E", "#2C2C2E"]
				}
			},
			xaxis: {
				categories: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				lines: {
					show: !1
				},
				labels: {
					style: {
						colors: "#9A9AB5",
						fontSize: "16px",
						fontFamily: "Source Sans Pro",
						fontWeight: 400,
						cssClass: "apexcharts-xaxis-label"
					}
				},
				axisBorder: {
					show: !1
				},
				axisTicks: {
					show: !1
				},
				tooltip: {
					enabled: !0
				},
				crosshairs: {
					show: !0
				}
			},
			yaxis: {
				show: !1
			},
			colors: ["#60D0FE"],
			markers: {
				size: 1.5,
				colors: "#2C2C2E",
				strokeColors: "#60D0FE",
				strokeWidth: 3,
				strokeOpacity: .9,
				strokeDashArray: 0,
				fillOpacity: 0,
				discrete: [],
				shape: "circle",
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: void 0,
				onDblClick: void 0,
				showNullDataPoints: !0,
				hover: {
					size: 4
				}
			},
			tooltip: {
				enabled: !0,
				custom: function (e) {
					var t = e.series,
						o = e.seriesIndex,
						a = e.dataPointIndex;
					e.w;
					return '<div class="apexcharts-tooltip-custom">'.concat('<span class="apexcharts-tooltip-custom__circle"></span><span class="apexcharts-tooltip-custom__line"></span><span>$').concat(t[o][a], "</span></div>")
				},
				style: {
					fontSize: "16px",
					fontFamily: "Source Sans Pro"
				},
				onDatasetHover: {
					highlightDataSeries: !1
				},
				x: {
					show: !1
				},
				marker: {
					show: !0
				}
			}
		},
		u = document.querySelector("#dashboard-chart-sales");
	u && new ApexCharts(u, d).render();
	if (document.querySelector("#dashboard-chart-work")) {
		Plotly.newPlot("dashboard-chart-work", [{
			values: [7, 10],
			name: "",
			hoverinfo: "none",
			hole: .7,
			type: "pie",
			marker: {
				colors: ["#2C2C2E"],
				line: {
					color: "#1B1B1D",
					width: 8
				}
			},
			textposition: "none"
		}], {
			height: 253,
			margin: {
				t: 10,
				l: 0,
				r: 0,
				b: 20
			},
			annotations: [{
				font: {
					size: 26,
					family: "Source Sans Pro",
					color: "#D7DAE5"
				},
				showarrow: !1,
				text: "<span>7 of 10</span><br>tasks done",
				x: .5,
				y: .5
			}],
			showlegend: !1
		}, {
			displayModeBar: !1
		})
	}
	if (document.querySelector("#dashboard-chart-sales-goals")) {
		Plotly.newPlot("dashboard-chart-sales-goals", [{
			values: [4, 10],
			name: "",
			hoverinfo: "none",
			hole: .7,
			type: "pie",
			marker: {
				colors: ["#2C2C2E", "#48C2A5"],
				line: {
					color: "#1B1B1D",
					width: 8
				}
			},
			textposition: "none"
		}], {
			height: 253,
			margin: {
				t: 10,
				l: 0,
				r: 0,
				b: 20
			},
			annotations: [{
				font: {
					size: 26,
					family: "Source Sans Pro",
					color: "#D7DAE5"
				},
				showarrow: !1,
				text: "<span>$ 24.546</span><br>62,2%",
				x: .5,
				y: .5
			}],
			showlegend: !1
		}, {
			displayModeBar: !1
		})
	}
	new Swiper(".swiper-container", {
		slidesPerView: "auto",
		spaceBetween: 15
	})
}, function (e, t, o) {}, function (e, t, o) {}]);




