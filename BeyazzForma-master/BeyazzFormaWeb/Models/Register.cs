﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BeyazzFormaWeb.Models
{
    public class Register
    {
        [Required]
        [DisplayName("Adınız")]
        public string Name { get; set; }

        [Required]
        [DisplayName("Soyadınız")]
        public string SurName { get; set; }

        [Required]
        [DisplayName("Kullanıcı Adı")]
        [MinLength(6, ErrorMessage = "Kullanıcı Adı en az 6 karakter olmalıdır.")]
        public string UserName { get; set; }

        [Required]
        [DisplayName("Eposta")]
        [EmailAddress(ErrorMessage = "Eposta adresinizi düzgün giriniz.")]
        public string Email { get; set; }

        [Required]
        [DisplayName("Şifre")]
        [MinLength(6, ErrorMessage = "Şifre en az 6 karakter olmalıdır.")]
        public string Password { get; set; }

        [Required]
        [DisplayName("Şifre Tekrar")]
        [Compare("Password", ErrorMessage = "Şifreleriniz uyuşmuyor.")]
        public string RePassword { get; set; }
    }
}