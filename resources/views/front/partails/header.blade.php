<nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#"><i class="fas fa-mobile-alt mx-2"></i>متجر الإلكترونيات الحديثة</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link" href="#">الرئيسية</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">المنتجات</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">العروض</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">اتصل بنا</a></li>
                </ul>
                <form class="d-flex me-2">
                    <input class="form-control me-2" type="search" placeholder="ابحث عن منتج" id="search-input">
                    <button class="btn btn-outline-light" type="button" onclick="searchProducts()">بحث</button>
                </form>
                <a href="cart.html" class="btn btn-outline-light position-relative">
                    <i class="fas fa-shopping-cart"></i>
                    <span id="cart-count">0</span>
                </a>
            </div>
        </div>
    </nav>
