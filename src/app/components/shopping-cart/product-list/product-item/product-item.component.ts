import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
  @Input() addedToWishlist:boolean=false;
  
  constructor(private msg:MessangerService,private cartService:CartService,private wishlistService:WishlistService ) { }
  
  ngOnInit(): void {
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>
    {
      this.msg.sendMsg(this.productItem);
    })
    
  }

  handleAddToWishlist(){
    this.wishlistService.addToWishList(this.productItem.id).subscribe(()=>{
    this.addedToWishlist=true;
    })
  }

  handleRemoveFromWishlist(){
   this.wishlistService.removeFromWishList(this.productItem.id).subscribe(()=>{
     this.addedToWishlist=false;
   })
  }

}
 