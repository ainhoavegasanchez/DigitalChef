import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order/order.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = {
    email: "",
    pass: "",
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private orderService: OrderService

  ) { }

  selectUser(): void {

    this.userService.getUser(this.user).subscribe(
      (usuarioExiste) => {
        this.userService.userSet = usuarioExiste;
        console.log(this.userService.UserGet);
        if (usuarioExiste) {
          this.orderService.insertOrder().subscribe(
            order => {
              this.orderService.orderSet = order;
            });
          this.router.navigate(['/inicio']);
        }
      }
    );
  }

}

