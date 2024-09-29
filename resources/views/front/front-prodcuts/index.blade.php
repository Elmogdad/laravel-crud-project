@extends('front.partails.master')

@section('title' , 'product')

@section('content')
<h2 class="text-center mb-4">منتجاتنا</h2>
        <div class="row">
            <div class="col-md-3 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">تصفية المنتجات</h5>
                    </div>
                    <div class="card-body">
                        <h6>الفئات</h6>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="smartphone" id="smartphone">
                            <label class="form-check-label" for="smartphone">الهواتف الذكية</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="laptop" id="laptop">
                            <label class="form-check-label" for="laptop">أجهزة الحاسوب المحمولة</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="tablet" id="tablet">
                            <label class="form-check-label" for="tablet">الأجهزة اللوحية</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="accessory" id="accessory">
                            <label class="form-check-label" for="accessory">الإكسسوارات</label>
                        </div>
                        <button class="btn btn-primary mt-3" onclick="filterProducts()">تطبيق الفلتر</button>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="row" id="products-container">
                    <!-- سيتم إضافة المنتجات هنا باستخدام JavaScript -->
                </div>
            </div>
        </div>

@endsection

