Page 1
Search wrt category(flights,trains,Bus,hotels,holiday packages)
> http://localhost:6700/category/6
> https://travelgo-api.herokuapp.com/category/6

Explore trip ideas
 http://localhost:6700/type/2
 https://travelgo-api.herokuapp.com/type/2


Page 2


filter

>Load from destination dropdown
  > http://localhost:6700/fromDestination
  > https://travelgo-api.herokuapp.com/fromDestination

>Load to_destination data wrt from_destination dropdown
  > http://localhost:6700/toDestination_details/1?from=NewDelhi
  > https://travelgo-api.herokuapp.com/toDestination_details/1?from=NewDelhi

Load flights on search
  > http://localhost:6700/flightsearch/1?from=NewDelhi&to=Bangalore
  > https://travelgo-api.herokuapp.com/flightsearch/1?from=NewDelhi&to=Bangalore

> Popular filter 
  data respect to Non stop flights
  > http://localhost:6700/filter/1?stop=Non-stop
  >https://travelgo-api.herokuapp.com/filter/1?stop=Non-stop

   data respect to Non stop and Indigo flights
  > http://localhost:6700/filter/1?stop=Non-stop&name=Indigo
  > https://travelgo-api.herokuapp.com/filter/1?stop=Non-stop&name=Indigo

    data respect to Indigo flights
  > http://localhost:6700/filter/1?name=Indigo
  > https://travelgo-api.herokuapp.com/filter/1?name=Indigo

> cost filter
  > http://localhost:6700/filter_cost/1?lprice=3649&hprice=7245
  > https://travelgo-api.herokuapp.com/filter_cost/1?lprice=3649&hprice=7245

 data respect to flight name and cost 

  > http://localhost:6700/filter/1?lcost=3649&hcost=7245&name=Indigo
  > https://travelgo-api.herokuapp.com/filter/1?lcost=3649&hcost=7245&name=Indigo

 filter wrt flight name
  > http://localhost:6700/filter/1?name=Indigo
  > https://travelgo-api.herokuapp.com/filter/1?name=Indigo



Page 3



filter

>Load from_destination dropdown
  > http://localhost:6700/fromDestination
  > https://travelgo-api.herokuapp.com/fromDestination

>Load to_destination data wrt from_destination dropdown
  > http://localhost:6700/toDestination_details/2?from=NewDelhi
  > https://travelgo-api.herokuapp.com/toDestination_details/2?from=NewDelhi

Load trains on search
  > http://localhost:6700/trainsearch/2?from=Trivandrum&to=Mumbai&class=Sleeper,
  > https://travelgo-api.herokuapp.com/trainsearch/2?from=Trivandrum&to=Mumbai&class=Sleeper

> Popular filter 
  data respect to AC trains
  > http://localhost:6700/filter_class/2?class=3AC
  > https://travelgo-api.herokuapp.com/filter_class/2?class=3AC

 

> cost filter
  > http://localhost:6700/filter_cost/2?lprice=2255&hprice=16346
  > https://travelgo-api.herokuapp.com/filter_cost/2?lprice=2255&hprice=16346

 data respect to train type and cost 

  >http://localhost:6700/filter/2?lprice=2565&hprice=7245&class=Sleeper
  > https://travelgo-api.herokuapp.com/filter/2?lprice=2565&hprice=7245&class=Sleeper




Page 4

filter

>Load from_destination dropdown
  > http://localhost:6700/fromDestination
  > https://travelgo-api.herokuapp.com/fromDestination

>Load to_destination data wrt from_destination dropdown
  > http://localhost:6700/toDestination_details/3?from=Chennai
  > https://travelgo-api.herokuapp.com/toDestination_details/3?from=Chennai

Load bus on search
  > http://localhost:6700/bussearch/3?from=Chennai&to=Bangalore,
  > https://travelgo-api.herokuapp.com/bussearch/3?from=Chennai&to=Bangalore

> Popular filter 
  data respect to AC bus
  > http://localhost:6700/filter_class_hrs/3?class=AC_sleeper
  > https://travelgo-api.herokuapp.com/filter_class_hrs/3?class=AC_sleeper

   data respect to class and hpurs of travel
  > http://localhost:6700/filter_class_hrs/3?class=AC_sleeper&hours=6hrs_30min 
  > https://travelgo-api.herokuapp.com/filter_class_hrs/3?class=AC_sleeper&hours=6hrs_30min 

    data respect to hours of travel
  > http://localhost:6700/filter/3?hours=6hrs_30min 
  > https://travelgo-api.herokuapp.com/filter/3?hours=6hrs_30min

> cost filter
  > http://localhost:6700/filter_cost/3?lprice=750&hprice=1700
  > https://travelgo-api.herokuapp.com/filter_cost/3?lprice=750&hprice=1700

 data respect to bus class and cost 

  > http://localhost:6700/filter/3?lprice=750&hprice=1700&class=AC_sleeper
  > https://travelgo-api.herokuapp.com/filter/3?lprice=750&hprice=1700&class=AC_sleeper





Page 5
 filter

>Load city dropdown
  > http://localhost:6700/city
  > https://travelgo-api.herokuapp.com/city

Load hotels on search
  > http://localhost:6700/hotelsearch/4?cityid=1&rooms=1&guests=2,
  > https://travelgo-api.herokuapp.com/hotelsearch/4?cityid=1&rooms=1&guests=2

> Popular filter 
  data respect to hotels providing free beakfast
  > http://localhost:6700/filter_search/4?breakfast=Free
  > https://travelgo-api.herokuapp.com/filter_search/4?breakfast=Free

   list hotels giving refundable option
  > http://localhost:6700/filter_search/4?isRefundable=yes  
  > https://travelgo-api.herokuapp.com/filter_search/4?isRefundable=yes

    data respect to star category
  > http://localhost:6700/filter_search/4?stars=5
  > https://travelgo-api.herokuapp.com/filter_search/4?stars=5

> cost filter
  > http://localhost:6700/filter_cost/4?lprice=3426&hprice=6034
  > https://travelgo-api.herokuapp.com/filter_cost/4?lprice=3426&hprice=6034

 data respect to rating and cost 

  > http://localhost:6700/filter_search/4?lprice=3426&hprice=6034&rating=3.5
  > https://travelgo-api.herokuapp.com/filter_search/4?lprice=3426&hprice=6034&rating=3.5

 filter wrt hotel rating
  > http://localhost:6700/filter_search/4?rating=4.5
  > https://travelgo-api.herokuapp.com/filter_search/4?rating=4.5
  filter wrt hotel facilities
  > http://localhost:6700/filter_search/4?faclities=Swimming
  > https://travelgo-api.herokuapp.com/filter_search/4?faclities=Swimming


Page 6

 filter

>Load  city dropdown
> http://localhost:6700/city
  > https://travelgo-api.herokuapp.com/city

Load holiday packages on search
  > http://localhost:6700/holiday_packagesearch/5?from=Bangalore,
  >https://travelgo-api.herokuapp.com/holiday_packagesearch/5?from=Bangalore



Page 7
> trip category review details page
> http://localhost:6700/reviewdetail/1?id=1
> https://travelgo-api.herokuapp.com/reviewdetail/1?id=1




page 8
checkout page

> api to book ticket
  > localhost:6700/bookticket
  > https://travelgo-api.herokuapp.com/bookticket
  > list all order
  > http://localhost:6700/tickets
  > https://travelgo-api.herokuapp.com/tickets
  > http://localhost:6700/tickets?email=mia@gmail.com
  > https://travelgo-api.herokuapp.com/tickets?email=mia@gmail.com



Delete booking 
> localhost:6700/deleteticket
> https://travelgo-api.herokuapp.com/deleteticket
 

 update ticket details
 > localhost:6700/updateticket/620bb8909312119972c53b26?status=Success
 > https://travelgo-api.herokuapp.com/updateticket/620bb8909312119972c53b26?status=Success
 > localhost:6700/updateticket/TEST_95860?status=Success
 > https://travelgo-api.herokuapp.com/updateticket/TEST_95860?status=Success