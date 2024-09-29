<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontController extends Controller
{

 public function index() {
    return view('front.index');
 }

 public function all_products() {
    return view('front.front-prodcuts.index');
 }

 public function offers() {
    return view('front.offers.index');
 }

}
