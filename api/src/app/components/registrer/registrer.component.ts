import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registrer',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule],
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.scss',

})
export class RegistrerComponent {
  user = {
    email: "",
    name: "",
    pass: ""
  }

  constructor(private userService: UserService, 
    private router:Router) { }

  registrerUser() {
    this.userService.insertUser(this.user).subscribe((datos) => {
      (dato: any) => {
        if (dato) {
          this.router.navigate(['/login']);
        }
      }
    });
  }

}

