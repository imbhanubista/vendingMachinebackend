# VENDING MACHINE 

We have build the vending machine where user can insert a coin and get back the desired drink. The drink in the vending machine can purchased and refund.

# Specification 

1. Three items are available at the moment [COKE,DEW,PEPSI] having default quantity and default cash. 

2. If user entered coin is less than the items price than the machine cannot processed further. If the entered coin is greater    than the items cost than the return is calculated and return the change/remaining balance.

3. If the purchase items is decreased than cash bank should increased and when the user refund the item, items quantity should increased and cash should decreased.

4. User can return items using Reference Code which is provided while purchasing items.

5. we have handled the following cases:
    a. machine are out of items and 
    b. machine is out of coins

6. Default coin/cash bank is 100

# Assumption
- To return the product/items user must have token(refCode) to verify if the returned items is brought from this vending machine.
- Items are stored in a default array without requesting from body.
- Makes one default route to load the items in machine
- If user order quantities are more than a quantity that the machine have at that time we must be able to sale the quantities that machine have.
- If there is returned money is greater than the money in cash bank than the purchased request is rejected but this issue can be fixed by adding coupan for remaining money.


# Screenshots

# Items load
![itemload](https://user-images.githubusercontent.com/76931757/165078191-560e71c8-bc80-487e-b45d-c23fcf45a274.png)

# Loaded items on robo 3t
![item](https://user-images.githubusercontent.com/76931757/165078224-b83221fa-84fc-4241-868e-d1f018fed2ca.png)

# get all items
![getall](https://user-images.githubusercontent.com/76931757/165078238-520d2ff6-69ce-4f7a-9db4-aa946ee04522.png)

# Default cash load
![cashload](https://user-images.githubusercontent.com/76931757/165078281-d4fc9ccd-1566-4b1c-a1ed-d9ed03053db9.png)

# cash on robo 3t
![price](https://user-images.githubusercontent.com/76931757/165078292-12c70cba-6a55-4d2e-b6a3-4c293c36bc30.png)

# Purchase
![purchase](https://user-images.githubusercontent.com/76931757/165078335-74a122fd-b490-4ab8-8634-85a74b8da17d.png)

# Purchased item on robo 3T
![purchasedfad](https://user-images.githubusercontent.com/76931757/165078349-fc62d365-2281-4173-b3fd-db6ae9c364ec.png)

# Refund
![refund](https://user-images.githubusercontent.com/76931757/165078357-1942e378-477d-408e-9010-ed1424f5cd1f.png)

