import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order/order.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/User';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = {
    email: "",
    pass: "",
  }
  sendPass: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private orderService: OrderService

  ) { }

  selectUser(): void {

    if (this.user.email != " " && this.user.pass != " ") {

      this.userService.getUser(this.user).subscribe(
        usuarioExiste => {
          this.userService.set(usuarioExiste);

          if (usuarioExiste) {

            if (usuarioExiste.email == "cocina@digitalchef.com") {
              this.router.navigate(['/cocina']);
            }
            this.orderService.insertOrder().subscribe(
              order => {
                this.orderService.set(order);

                this.router.navigate(['/inicio']);
              });
          }
        }
      );
    }
  }

  sendNew() {
    this.sendPass = true;
  }

  emailPass: string = "";
  recuperar() {
    this.userService.sendNewPass(this.emailPass).subscribe(
      data => {
        this.sendPass = false;
      }
    );

  }
}

