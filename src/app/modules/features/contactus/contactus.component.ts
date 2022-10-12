import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {


  
	// form: FormGroup;
	// name: FormControl = new FormControl("", [Validators.required]);
	// email: FormControl = new FormControl("", [Validators.required, Validators.email]);
	// message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
	// honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
	// submitted: boolean = false; // show and hide the success message
	// isLoading: boolean = false; // disable the submit button if we're loading
	// responseMessage: string = ''; // the response message to show to the user



	// constructor(private formBuilder: FormBuilder, private http: HttpClient) {
	// 	this.form = this.formBuilder.group({
	// 		name: this.name,
	// 		email: this.email,
	// 		message: this.message,
	// 		honeypot: this.honeypot
	// 	});
	// }

  // form: FormGroup = new FormGroup({}); 
  registerForm: FormGroup;
  error: any;
  //submitted: boolean; 

  submitted = false;

 // public loginForm: FormGroup;
  public isSubmit: boolean = false;
 // public returnUrl;
  constructor(private fb: FormBuilder ,
    //private loginService: LoggerService, 
    //private authenticationService: AuthenticationService,
    //private toasterService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
    
    ) {
    window.scrollTo(0, 0)

    // this.form = fb.group({ 
      
    //   name: ['', [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")]], 
    //   mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    //   email_id: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    //   message: ['', [Validators.required]],
    // })  
  }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: [''],
      mobile_num: [''],
      email: [''],
      message: ['']
  });

  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
    }


   get contactForm() { return this.registerForm.controls; }



//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//         return;
//     }

//         this.authenticationService.contactLoginform(this.registerForm.value).subscribe(res => {
//         if (res.status) {
//           this.toasterService.success(res.message);
//           this.registerForm.reset();
//           this.router.navigate(['/']);
//           this.goToTop();

//           return true;
//         }
//       })

//     //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
// }

goToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

  // keyPressNumbers(event) {
  //   var charCode = (event.which) ? event.which : event.keyCode;
  //   // Only Numbers 0-9
  //   if ((charCode < 48 || charCode > 57)) {
  //     event.preventDefault();
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }


  // onSubmit() {
	// 	if (this.form.status == "VALID" && this.honeypot.value == "") {
	// 		this.form.disable(); // disable the form if it's valid to disable multiple submissions
	// 		var formData: any = new FormData();
	// 		// formData.append("name", this.form.get("name").value);
	// 		// formData.append("email", this.form.get("email").value);
	// 		// formData.append("message", this.form.get("message").value);
	// 		this.isLoading = true; // sending the post request async so it's in progress
	// 		this.submitted = false; // hide the response message on multiple submits
	// 		this.http.post("YOUR GOOGLE WEB APP URL HERE", formData).subscribe(
	// 			(response) => {
	// 				// choose the response message
	// 				// if (response["result"] == "success") {
	// 				// 	this.responseMessage = "Thanks for the message! I'll get back to you soon!";
	// 				// } else {
	// 				// 	this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
	// 				// }
	// 				this.form.enable(); // re enable the form after a success
	// 				this.submitted = true; // show the response message
	// 				this.isLoading = false; // re enable the submit button
	// 				console.log(response);
	// 			},
	// 			(error) => {
	// 				this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
	// 				this.form.enable(); // re enable the form after a success
	// 				this.submitted = true; // show the response message
	// 				this.isLoading = false; // re enable the submit button
	// 				console.log(error);
	// 			}
	// 		);
	// 	}
	// }

  onSubmit() {
    this.submitted = true;

    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }

    //     this.authenticationService.contactLoginform(this.registerForm.value).subscribe(res => {
    //     if (res.status) {
    //       this.toasterService.success(res.message);
    //       this.registerForm.reset();
    //       this.router.navigate(['/']);
    //       this.goToTop();

    //       return true;
    //     }
    //   })

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

}
