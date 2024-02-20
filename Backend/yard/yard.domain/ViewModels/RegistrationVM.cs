﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace yard.domain.ViewModels
{
	public class RegistrationVM
	{
		public string Email { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string ProfilePictureUrl { get; set; }
		public string ConfirmPassword { get; set; }
		public string Password { get; set; }
		public AddressVM Address { get; set; }
	}
}