import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products_admin';
  updateIndex:number = 0; 
  enableUpdate = false;
  JSON = JSON;
  addedProduct:any[] = [
    {quantity:10, imgUrl:'https://contents.mediadecathlon.com/p64484/9737346cc67b1751562cd9ecfb70e092/p64484.jpg',prodName:"Black Super Cargo Pant",category:"men", price:99.00},
    {quantity:40, imgUrl:'https://estilofashions.com/wp-content/uploads/2021/02/Mens-Jeans-Pant-1-1.jpg'         ,prodName:"Mens Jeans Pant 11",category:"men", price:99.00},
    {quantity:34, imgUrl:'https://cdn.shopify.com/s/files/1/0587/1665/1703/products/DSC_1649_1024x1024.jpg'      ,prodName:"White Jeans",category:"men", price:99.00},
    {quantity:43, imgUrl:'https://media.vogue.in/wp-content/uploads/2021/06/Sari-Shades-of-India-28000.jpg'      ,prodName:"Sari Shades-of India 28000",category:"women", price:99.00},
    {quantity:12, imgUrl:'https://m.media-amazon.com/images/I/91sTOWp0XCL._UY550_.jpg'                           ,prodName:"Green Sari Shades-of India 28000",category:"women", price:99.00},
    {quantity:10, imgUrl:'https://contents.mediadecathlon.com/p64484/9737346cc67b1751562cd9ecfb70e092/p64484.jpg',prodName:"Black Super Cargo Pant",category:"men", price:99.00},
    {quantity:40, imgUrl:'https://tiimg.tistatic.com/fp/1/007/712/party-wear-skin-friendly-comfortable-breathable-plain-grey-formal-pant-for-men--649-w300.jpg'         ,prodName:"Mens Jeans Pant 11",category:"men", price:99.00},
    {quantity:34, imgUrl:'https://cdnext.fynd.com/image/data/Superdry/10082022img/410289206001_1.jpg'      ,prodName:"White Jeans",category:"men", price:99.00},
    {quantity:43, imgUrl:'https://cdn.w600.comps.canstockphoto.com/young-pretty-woman-in-indian-sari-dress-picture_csp12593811.jpg'      ,prodName:"Sari Shades-of India 28000",category:"women", price:99.00},
    {quantity:12, imgUrl:'https://n4.sdlcdn.com/imgs/g/z/9/Saree-Designer-sari-sadi-Green-SDL314566881-1-2210d.jpg'                           ,prodName:"Green Sari Shades-of India 28000",category:"women", price:99.00}
  ];

  currentProduct = {prodName:'',imgUrl:'',quantity:0,category:"",price:0};

  constructor() {
    console.log(this.JSON);
    
  }

  fillEditData(prodIndex:any){
    this.enableUpdate = true;

    this.objectUpdate(this.addedProduct[prodIndex],this.currentProduct);

    this.updateIndex = prodIndex;
  }

  updateProduct(){
    this.objectUpdate(this.currentProduct,this.addedProduct[this.updateIndex])
    this.enableUpdate = false;
    this.resetValues(this.currentProduct)
  }

  deleteProduct(productIndex:number){
    if(confirm("Do You Want To Delete this Products")){
      this.addedProduct.splice(productIndex,1)
    }
  }

  objectUpdate(oldObject:any,currentObject:any){
    for(let key in oldObject){
      currentObject[key] = oldObject[key];
    }
  }

  resetValues(crObject:any){
    for(let key in crObject){
      crObject[key] = ''
    }
  }



}
