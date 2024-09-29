@extends('products.partials.master')

@section('content')
<div class="row justify-content-center mt-4">
        <div class="col-md-10 d-flex justify-content-end">
            <a class="btn btn-dark text-white"  href="{{ route('products.create') }}">Create Product</a>
        </div>
    </div>
    <div class="row d-flex justify-content-center">

@include('products.partials.success')

    <div class="col-md-10">
        <div class="card border-0 shadow-lg my-4">

            <div class="card-header bg-dark">
                <h3 class="text-white text-center">Products</h3>
            </div>

       <table class="table">
        <tr>
            <th>ID</th>
            <th></th>
            <th>Name</th>
            <th>Sku</th>
            <th>Price</th>
            <th>Created at</th>
            <th>Actions</th>
        </tr>
        @if ($products->isNotEmpty())
        @foreach ($products as $product)
        <tr>
            <td>{{ $product->id}}</td>
            <td>
                @if ($product->image != "")
              <img width="70" src="{{ asset('uploads/products/'. $product->image)}}" alt="">
                @endif
            </td>
            <td>{{ $product->name}}</td>
            <td>{{ $product->sku}}</td>
            <td>{{ $product->price}}</td>
            <td>{{ \Carbon\Carbon::parse($product->created_at)->format('d , M ,Y')}}</td>
            <td>
                <a href="{{ route('products.edit' , $product->id)}}" class="btn "><i class="fa-solid fa-pen-to-square text-info"></i></a>
                <a href="#" onclick="deleteProduct({{ $product->id }})" class="btn"><i class="fa-solid fa-trash text-danger"></i></a>
                <form id="delete-product-from-{{ $product->id }}" action="{{ route('products.destroy' , $product->id)}}" method="post">
                    @method('delete')
                    @csrf

                </form>
            </td>
        </tr>
        @endforeach

        @endif

       </table>
        </div>
    </div>
</div>

@endsection
