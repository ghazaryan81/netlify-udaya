			function customScrollTop(){
						//$('html,body').animate({scrollTop: target.offset().top},1200);
						//window.scrollTop(0);
						//alert("sdf");
			}

			function bodyFade(){
				setTimeout(function(){
					$(".main-carcass,.main-footer").addClass("main-carcass-visible");
				},100);
			}

			app=angular.module("appRange",["ngSanitize","ngRoute"]);

			app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
				$locationProvider.html5Mode({enabled:true,requireBase:false});
				//$locationProvider.html5Mode({  enabled:true,  requireBase: false,  rewriteLinks: false});
				$routeProvider.when('/',{
										templateUrl:"pages/page-index.html",
										controller:"templateController"
									});
				$routeProvider.when('/all-videos/',{
										templateUrl:"pages/page-all-videos.html",
										controller:"templateController"
									});
				$routeProvider.when('/teachers/',{
										templateUrl:"pages/page-teachers.html",
										controller:"templateController"
									});
				$routeProvider.when('/teachers/:teacherId/:teacherTitle/',{
										templateUrl:"pages/page-teacher-inner.html",
										controller:"templateController",
										controller:"teacherDetailsCtrl"
									});
				$routeProvider.when('/style/',{
										templateUrl:"pages/page-style-list.html",
										controller:"templateController"
									});
				$routeProvider.when('/lifestyle/',{
										templateUrl:"pages/page-lifestyle.html",
										controller:"templateController"
									});
				$routeProvider.when('/store/',{
										templateUrl:"pages/page-store.html",
										controller:"templateController"
									});
				$routeProvider.when('/store/:storeId/:storeId/',{
										templateUrl:"pages/page-store-inner.html",
										controller:"templateController",
										controller:"StoreDetailsCtrl"
									});
				$routeProvider.when('/blog/',{
										templateUrl:"pages/page-blog-list.html",
										controller:"templateController"
									});
				$routeProvider.when('/blog/:blogId/:blogTitle/',{
										templateUrl:"pages/page-blog-inner.html",
										controller:"templateController",
										controller:"blogListJsonCtrl",
										controller:"BlogDetailsCtrl"
									});
				$routeProvider.when('/contact/',{
										templateUrl:"pages/page-contact.html",
										controller:"templateController"
									});
				$routeProvider.when('/about/',{
										templateUrl:"pages/page-about.html",
										controller:"templateController"
									});
				$routeProvider.when('/teacher-training/',{
										templateUrl:"pages/page-teacher-training.html",
										controller:"templateController"
									});
				$routeProvider.when('/personal-info/',{
										templateUrl:"pages/page-personal-info.html",
										controller:"templateController"
									});
				$routeProvider.when('/change-password/',{
										templateUrl:"pages/page-change-password.html",
										controller:"templateController"
									});
				$routeProvider.when('/saved-credit-cards/',{
										templateUrl:"pages/page-saved-credit-cards.html",
										controller:"templateController"
									});
				$routeProvider.when('/cancel-subscribtion/',{
										templateUrl:"pages/page-cancel-subscribtion.html",
										controller:"templateController"
									});
				$routeProvider.when('/history-list/',{
										templateUrl:"pages/page-history-list.html",
										controller:"templateController"
									});
				$routeProvider.when('/term-of-use/',{
										templateUrl:"pages/page-term-of-use.html",
										controller:"templateController"
									});
				$routeProvider.when('/e404/',{
										templateUrl:"pages/page-e404.html",
										controller:"templateController"
									});
				$routeProvider.when('/country-block/',{
										templateUrl:"pages/page-country-block.html",
										controller:"templateController"
									});
				$routeProvider.otherwise({
										redirectTo:"/"
									});
			}]);

			// STORE DETAILS CTRL
			app.controller("StoreDetailsCtrl", ['$scope','$http','$location','$routeParams', function($scope, $http, $location, $routeParams){
				$scope.storeId=$routeParams.storeId;
				$scope.storeTitle=$routeParams.storeTitle
			}]);

			// TEACHER DETAILS CTRL
			app.controller("teacherDetailsCtrl", ['$scope','$http','$location','$routeParams', function($scope, $http, $location, $routeParams){
				$scope.teacherId=$routeParams.teacherId;
				$scope.teacherTitle=$routeParams.teacherTitle
			}]);

			// BLOG DETAILS CTRL
			app.controller("BlogDetailsCtrl", ['$scope','$http','$location','$routeParams', function($scope, $http, $location, $routeParams){
				$scope.blogId=$routeParams.blogId;
				$scope.blogTitle=$routeParams.blogTitle
			}]);

			// MOVIE LIST JSON CONTROLLER
			app.controller("movieJsonCtrl", ['$scope','$http', function($scope, $http){
																$http.get('./json/movie.json').success(function(data,status,headers,config){
																	$scope.movieParams = data;
																});
															}]
			).directive("movieJsonDir",function(){});

			//DROP DOWN TEACHER LIST CONTROLLER
			app.controller("teachersJsonCtrl", ['$scope','$http', function($scope, $http){
																$http.get('./json/teachers.json').success(function(data,status,headers,config){
																	$scope.teachersJson=data;
																	$scope.yourArray=$scope.teachersJson.teachers1
																});
															}]
			).directive("lengthArr",function(){});

			//BLOG LIST JSON CONTROLLER
			app.controller("blogListJsonCtrl",['$scope','$http',function($scope,$http){
																$http.get('./json/blogList.json').success(function(data,status,headers,config){
																	$scope.blogListJson=data;
																});
			}]).directive("blogList",function(){
				link_globalFunction=function(scope,element,attrs){
					setTimeout(function(){
						img=element.parent().find(".blog-imgae");
						angular.forEach(img,function(){
							img.addClass("transition-visible");
						});
					},100);
				};
				return{
							restrict:"E",
							scope:false,
							controller:function($scope){},
							link:link_globalFunction
				}
			});

			// INDEX MAIN SLIDER CONTROLLER
			app.controller("indexSliderCtrl",["$scope","$http",function($scope,$http){
																$http.get('./json/indexSlider.json').success(function(data,status,headers,config){
																	$scope.indexSliderJson=data;
																});
			}]).directive("indexSlider",function(){

							link_indexSlider=function(scope,element,attrs){
								setTimeout(function(){
									var indexMainSlider=element.parent().find(".home-slide-cell").owlCarousel({
										items:1,
										navigation:true,
										slideSpeed:800,
										lazyEffect:"fade",
										singleItem:true,
										transitionStyle:"fadeUp",
										responsive:true,
										afterAction:function(elem){}
									});
									$(".home-slide-prev").click(function(){indexMainSlider.trigger('owl.prev');return false;});
									$(".home-slide-next").click(function(){indexMainSlider.trigger('owl.next');return false;});
								},300);

							};
				return	{
								restrict:"E",
								scope:false,
								controller:function($scope){},
								link:link_indexSlider
							}
			});

			// HOME HEADER SLIDER CONTROLLER
			app.controller("homeHeaderSliderCtrl",["$scope","$http",function($scope,$http){
				$http.get("./json/homeHeaderLessonsRotate.json").success(function(data,status,headers,config){
					$scope.homeHeader=data;
				});
			}]).directive("homeHeaderSliderDir",function(){
				link_homeHeader=function(scope,element,attrs){
					setTimeout(function(){
						var videoSlide=element.parent().find(".video-slide").owlCarousel({
							items:1,
							navigation:true,
							slideSpeed:800,
							lazyEffect:"fade",
							singleItem:true,
							transitionStyle:"goDown",
							responsive:true,
							afterAction:function(elem){}
						});
						$(".wide-slide-prev").click(function(){videoSlide.trigger('owl.prev');return false;});
						$(".wide-slide-next").click(function(){videoSlide.trigger('owl.next');return false;});
					},300);
				};
				return{
					restrict:"E",
					scope:false,
					controller:function($scope){},
					link:link_homeHeader
				}
			});



			app.controller("allTeacher",["$scope","$http",function($scope,$http){
				$http.get("./json/teachers.json").success(function(data,status,headers,config){
					$scope.allTeachers=data;
				});
			}]);

			// INDEX LESSONS LIST & CAROUSEL
			app.controller("lessonsListJson",["$scope","$http",function($scope,$http){
				$http.get("./json/lessonsList.json").success(function(data,status,headers,config){
					$scope.lessonsListJson=data;
					$scope.iterations=Math.ceil(($scope.lessonsListJson.length)/8);
					$scope.k=0;
					$scope.j=0;
					$scope.i=0;
					$scope.lengthArray=[];
					$scope.row =[];
					for ($scope.i=0;$scope.i<=($scope.iterations-1);$scope.i++){
						$scope.row[$scope.i] = [];
						$scope.lengthArray[$scope.i]=$scope.i;
						for ($scope.j=0;$scope.j<=7;$scope.j++){
							$scope.row[$scope.i][$scope.j]=$scope.lessonsListJson[$scope.k];
							$scope.k++;
						}
					}
				});
			}]).directive("lessonsListDir",function(){
				link_lessonsListCarousel=function(scope,element,attrs){
					setTimeout(function(){

						var owlLessons=element.parent().find(".lessons-carousel").owlCarousel({
							items:1,
							navigation:true,
							slideSpeed:800,
							lazyEffect:"fade",
							singleItem:true,
							transitionStyle:"goDown",
							responsive:true,
							afterAction:function(elem){}
						});
						$(".lessons-slide-prev").click(function(){owlLessons.trigger('owl.prev');return false;});
						$(".lessons-slide-next").click(function(){owlLessons.trigger('owl.next');return false;});

					},300);
				};
				return{
								restrict:"E",
								scope:false,
								controller:function($scope){},
								link:link_lessonsListCarousel
							}
			});


			//ONLY STORE LIST CONTROLLER
			app.controller("storeCtrl",["$scope","$http",function($scope,$http){
				$http.get('./json/store.json').success(function(data,status,headers,config){
					$scope.storeList=data;
					$scope.strippedString=$scope.storeList.storeProductTitle;
					//$scope.strippedString
					//$scope.strippedString=$scope.strippedString.replace(/(<([^>]+)>)/ig,"");
				});
			}]);

			//STORE LIST CONTROLLER
			app.controller("storeJsonCtrl",["$scope","$http",function($scope,$http){
				$http.get('./json/store.json').success(function(data,status,headers,config){
					$scope.storeJsonList=data;
				});
			}]).directive("storeDir",function(){
					link_store=function(scope,element,attrs){
						setTimeout(function(){
							var productSlide=element.parent().find(".product-carousel").owlCarousel({
								items:1,
								navigation:true,
								slideSpeed:800,
								lazyEffect:"fade",
								singleItem:true,
								transitionStyle:"backSlide",
								responsive:true,
								afterAction:function(elem){}
							});
							$(".product-slide-prev").click(function(){productSlide.trigger('owl.prev');return false;});
							$(".product-slide-next").click(function(){productSlide.trigger('owl.next');return false;});
						},300);
					};
					return{
						retrict:"E",
						scope:false,
						controller:function($scope){},
						link:link_store
					}
			});

			//LIFESTYLE LIST CONTROLLER
			app.controller("movieLifeStyleTypeCtrl",["$scope","$http",function($scope,$http){
				$http.get("./json/movieLifeStyleType.json").success(function(data,status,headers,config){
					$scope.movieLifeStyleType=data;
				});
			}]).directive("movieLifeStyleTypeDirective",function(){
				link_movieLifeStyleTypeDirective=function(scope,element,attrs){
				
								};
						return{
							retrict:"E",
							scope:false,
							controller:function($scope){},
							link:link_movieLifeStyleTypeDirective
						}
			});


			//INCLUDING TEMPLATES CONTROLLER
			app.controller("templateController",function(){}).
					//scrolTop
					directive("scrolTop",function(){
													cScrolTop=function(scope,element,attrs){

													};
													return{
																restrict:"E",
																scope:false,
																controller:function($scope){},
																link:cScrolTop
													}
					}).
					//dropDownUserProfile
					directive("dropDownUserProfile",function(){
						link_dropDownUserProfile=function(scope,element,attrs){
										element.parent().bind("mouseenter",function(){
											element.find(".dd-abs").css({display:"block"}).stop().animate({opacity:1,top:57},300);
										});
										element.parent().bind("mouseleave",function(){
											element.find(".dd-abs").stop().animate({opacity:0,top:47},300,function(){
												$(this).css({display:"none"});
											});
										});
									};
						return	{
										restrict:"E",
										scope:false,
										templateUrl:"templates/dropDownUserProfile.html",
										controller:function($scope){},
										link:link_dropDownUserProfile
									}
					}).
					//dropDownLifeStyle
					directive("dropDownLifeStyle",function(){
						link_dropDownLifeStyle=function(scope,element,attrs){
									element.parent().bind("mouseenter",function(){
										dropDownTeacher=element.find(".mdd");
										dropDownTeacher.css({display:"block"});
										dropDownTeacher.stop().animate({opacity:1,top:100},300);
									});
									element.parent().bind("mouseleave",function(){
										dropDownTeacher=element.find(".mdd");
										dropDownTeacher.stop().animate({opacity:0,top:80},300,function(){
											$(this).css({display:"none"});
										});
									});
						};
						return	{
										restrict:"E",
										scope:false,
										templateUrl:"templates/dropDownLifeStyle.html",
										controller:function($scope){},
										link:link_dropDownLifeStyle
									}
					}).
					//dropDownStyle
					directive("dropDownStyle",function(){
						link_dropDownStyle=function(scope, element,attrs){
									element.parent().bind("mouseenter",function(){
										dropDownTeacher=element.find(".mdd");
										dropDownTeacher.css({display:"block"});
										dropDownTeacher.stop().animate({opacity:1,top:100},300);
									});
									element.parent().bind("mouseleave",function(){
										dropDownTeacher=element.find(".mdd");
										dropDownTeacher.stop().animate({opacity:0,top:80},300,function(){
											$(this).css({display:"none"});
										});
									});
						};
						return	{
										restrict:"E",
										scope:false,
										templateUrl:"templates/dropDownStyle.html",
										controller:function($scope){},
										link:link_dropDownStyle
									}
					}).
					//dropDownTeachers
					directive("dropDownTeachers",function($http){
						var linkFn;
						linkFn=function(scope, element, attrs){
							//dd1
							ddTeacher1=element.find(".js-dd-teacher-carousel-list-1").owlCarousel({
								items:1,
								navigation:true,
								slideSpeed:800,
								lazyEffect:"fade",
								singleItem:true,
								transitionStyle:"goDown",
								responsive:true
							});
							$(".js-dd-t-prev-1").click(function(){
								ddTeacher1.trigger('owl.prev');
								return false;
							});
							$(".js-dd-t-next-1").click(function(){
								ddTeacher1.trigger('owl.next');
								return false;
							});
							//end dd1
							//dd2
							ddTeacher2=element.find(".js-dd-teacher-carousel-list-2").owlCarousel({
								items:1,
								navigation:true,
								slideSpeed:800,
								lazyEffect:"fade",
								singleItem:true,
								transitionStyle:"goDown",
								responsive:true
							});
							$(".js-dd-t-prev-2").click(function(){
								ddTeacher2.trigger('owl.prev');
								return false;
							});
							$(".js-dd-t-next-2").click(function(){
								ddTeacher2.trigger('owl.next');
								return false;
							});
							//end dd2
							//dd3
							ddTeacher3=element.find(".js-dd-teacher-carousel-list-3").owlCarousel({
								items:1,
								navigation:true,
								slideSpeed:800,
								lazyEffect:"fade",
								singleItem:true,
								transitionStyle:"goDown",
								responsive:true
							});
							$(".js-dd-t-prev-3").click(function(){
								ddTeacher3.trigger('owl.prev');
								return false;
							});
							$(".js-dd-t-next-3").click(function(){
								ddTeacher3.trigger('owl.next');
								return false;
							});
							//end dd3

							// mouseover for drop down TEACHER
							element.parent().bind("mouseenter",function(){
								dropDownTeacher=element.find(".mdd");
								dropDownTeacher.css({display:"block"});
								dropDownTeacher.stop().animate({opacity:1,top:100},300);
							});
							element.parent().bind("mouseleave",function(){
								dropDownTeacher=element.find(".mdd");
								dropDownTeacher.stop().animate({opacity:0,top:80},300,function(){
									$(this).css({display:"none"});
								});
							});
							// END mouseover for drop down TEACHER
						};
						return	{
										restrict:"E",
										scope:false,
										templateUrl:"templates/dropDownTeachers.html",
										controller:function($scope){},
										link:linkFn
									}
					}).
					//filterDropDownTeacher
					directive("filterDropDownTeacher",function(){
									link_filterDropDownTeacher=function(scrope,element,attrs){

										element.parent().bind("mouseenter",function(){
											element.parent().find(".drop-down-filter-box-position").css({display:"block"}).stop().animate({opacity:1,top:40},300);
										});

										element.parent().bind("mouseleave",function(){
											element.parent().find(".drop-down-filter-box-position").stop().animate({opacity:0,top:30},300,function(){
												$(this).css({display:"none"});
											});
										});

										dropDownTeacherCarousel=element.find(".drop-down-teacher-carousel").owlCarousel({
											items:1,
											navigation:true,
											slideSpeed:800,
											lazyEffect:"fade",
											singleItem:true,
											transitionStyle:"backSlide",
											responsive:true,
											afterAction:function(){}
										});

										$(".js-prev-teacher-carousel").click(function(){
											dropDownTeacherCarousel.trigger('owl.prev');
											return false;
										});

										$(".js-next-teacher-carousel").click(function(){
											dropDownTeacherCarousel.trigger('owl.next');
											return false;
										});
									};
						return	{
										restrict:"E",
										scope:false,
										templateUrl:"templates/filterDropDownTeacher.html",
										controller:function($scope){},
										link:link_filterDropDownTeacher
									}
					}).
					//filterDropDownLength
					directive("filterDropDownLength",function(){

									link_filterDropDownLength=function(scrope,element,attrs){
										element.parent().bind("mouseenter",function(){
											element.parent().find(".drop-down-filter-box-position").css({display:"block"}).stop().animate({opacity:1,top:40},300);
										});

										element.parent().bind("mouseleave",function(){
											element.parent().find(".drop-down-filter-box-position").stop().animate({opacity:0,top:30},300,function(){
												$(this).css({display:"none"});
											});
										});
									};

						return	{
										restrict:"E",
										scope:false,
										templateUrl:"templates/filterDropDownLenght.html",
										controller:function($scope){},
										link:link_filterDropDownLength
									}
					}).
					//filterDropDownDifficulty
					directive("filterDropDownDifficulty",function(){

									link_filterDropDownDifficulty=function(scrope,element,attrs){
										element.parent().bind("mouseenter",function(){
											element.parent().find(".drop-down-filter-box-position").css({display:"block"}).stop().animate({opacity:1,top:40},300);
										});

										element.parent().bind("mouseleave",function(){
											element.parent().find(".drop-down-filter-box-position").stop().animate({opacity:0,top:30},300,function(){
												$(this).css({display:"none"});
											});
										});
									};

						return	{
										restrict:"E",
										scope:false,
										templateUrl:"templates/filterDropDownDifficulty.html",
										controller:function($scope){},
										link:link_filterDropDownDifficulty
									}
					}).
					//mainFooter
					directive("mainFooter",function(){
						return {
										restrict:"E",
										scope:false,
										templateUrl:"templates/mainFooter.html",
										controller:function($scope){}
									}
					}).
					//mainHeader
					directive("mainHeader",function(){
						return {
										restrict:"E",
										scope:false,
										templateUrl:"templates/mainHeader.html",
										controller:function($scope){}
									}
					});