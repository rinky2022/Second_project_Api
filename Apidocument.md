Page 1
Search wrt category(flights,trains,Bus,hotels,holiday packages)
> http://localhost:6700/category/6
> https://xomato-api.herokuapp.com/restaurants?meal_id=5

Explore trip ideas
 http://localhost:6700/type/2


Page 2


filter

>Load from destination dropdown
  > http://localhost:6700/fromDestination
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

>Load to_destination data wrt from_destination dropdown
  > http://localhost:6700/toDestination_details/1?from=NewDelhi
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

Load flights on search
  > http://localhost:6700/flightsearch/1?from=NewDelhi&to=Bangalore
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

> Popular filter 
  data respect to Non stop flights
  > http://localhost:6700/filter/1?stop='Non-stop'
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

   data respect to Non stop and Indigo flights
  > http://localhost:6700/filter/1?stop='Non-stop'&name='Indigo'
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

    data respect to Indigo flights
  > http://localhost:6700/filter/1?name='Indigo'
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

> cost filter
  > http://localhost:6700/filter/1?lprice=3649&hprice=7245
  > https://xomato-api.herokuapp.com/filter/1?hcost=1000&lcost=500

 data respect to flight name and cost 
> cuisine filter + cost filter 
  > http://localhost:6700/filter/1?lcost=3649&hcost=7245&name=Indigo
  > https://xomato-api.herokuapp.com/filter/1?lcost=200&hcost=500&cuisineId=1

 filter wrt flight name
  > http://localhost:6700/filter/1?name='Indigo'
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1



Page 3



filter

>Load from_destination dropdown
  > http://localhost:6700/fromDestination
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

>Load to_destination data wrt from_destination dropdown
  > http://localhost:6700/toDestination_details/2?from=NewDelhi
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

Load trains on search
  > http://localhost:6700/trainsearch/2?from=Trivandrum&to=Mumbai&class=Sleeper,
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

> Popular filter 
  data respect to AC trains
  > http://localhost:6700/filter/2?class=3AC
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

 

> cost filter
  > http://localhost:6700/filter/2?lprice=2255&hprice=16346
  > https://xomato-api.herokuapp.com/filter/1?hcost=1000&lcost=500

 data respect to train type and cost 
> cuisine filter + cost filter 
  >http://localhost:6700/filter/2?lprice=2565&hprice=7245&class=Sleeper
  > https://xomato-api.herokuapp.com/filter/1?lcost=200&hcost=500&cuisineId=1




Page 4

filter

>Load from_destination dropdown
  > http://localhost:6700/from_destination
  > https://xomato-api.herokuapp.com/filter/3?cuisine=1

>Load to_destination data wrt from_destination dropdown
  > http://localhost:6700/toDestination_details/3?from=NewDelhi
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

Load bus on search
  > http://localhost:6700/bussearch/3?from=Chennai&to=Bangalore,
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

> Popular filter 
  data respect to AC bus
  > http://localhost:6700/filter/3?class=AC_sleeper
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

   data respect to class and hpurs of travel
  > http://localhost:6700/filter/3?class=AC_sleeper&hours=6hrs_30min  
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

    data respect to hours of travel
  > http://localhost:6700/filter/3?hours=6hrs_30min 
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

> cost filter
  > http://localhost:6700/filter/3?lprice=750&hprice=1700
  > https://xomato-api.herokuapp.com/filter/1?hcost=1000&lcost=500

 data respect to bus class and cost 

  > http://localhost:6700/filter/3?lprice=750&hprice=1700&class=AC_sleeper
  > https://xomato-api.herokuapp.com/filter/1?lcost=200&hcost=500&cuisineId=1





Page 5
 filter

>Load city dropdown
  > http://localhost:6700/city
  > https://xomato-api.herokuapp.com/filter/3?cuisine=1

Load hotels on search
  > http://localhost:6700/hotelsearch/4?cityid=1&rooms=1&guests=2,
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

> Popular filter 
  data respect to hotels providing free beakfast
  > http://localhost:6700/filter/4?breakfast=Free
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

   list hotels giving refundable option
  > http://localhost:6700/filter/4?isRefundable=yes  
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

    data respect to star category
  > http://localhost:6700/filter/4?stars=5
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1

> cost filter
  > http://localhost:6700/filter/4?lprice=3426&hprice=6034
  > https://xomato-api.herokuapp.com/filter/1?hcost=1000&lcost=500

 data respect to rating and cost 
> cuisine filter + cost filter 
  > http://localhost:6700/filter/3?lcost=lprice=3426&hprice=6034&rating=3.5/5
  > https://xomato-api.herokuapp.com/filter/1?lcost=200&hcost=500&cuisineId=1

 filter wrt hotel rating
  > http://localhost:6700/filter/4?rating=4.5/5
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1
  filter wrt hotel facilities
  > http://localhost:6700/filter/4?faclities=Swimming
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1


Page 6

 filter

>Load  city dropdown
> http://localhost:6700/city
  > https://xomato-api.herokuapp.com/filter/3?cuisine=1

Load holiday packages on search
  > http://localhost:6700/holiday_packagesearch/5?from=Bangalore,
  > https://xomato-api.herokuapp.com/filter/4?cuisine=1



Page 7
> trip category review details page
> http://localhost:6700/reviewdetail/1?id=1
> https://xomato-api.herokuapp.com/details/1




page 8
checkout page

> api to book ticket
  > localhost:6700/bookticket
  > https://xomato-api.herokuapp.com/placeOrder



Delete booking 
> localhost:6700/deleteticket
> https://xomato-api.herokuapp.com/deleteOrder
 

 update ticket details
 > localhost:6700/updateticket/620bb8909312119972c53b26?status=Success
 > https://xomato-api.herokuapp.com/updateOrder/61ffab62c39f96bf7ba39676?status=Success