@extends('products.partials.master')

@section('content')
<div class="row justify-content-center mt-4">
        <div class="col-md-10 d-flex justify-content-end">
            <a class="btn btn-dark text-white" href="{{ route('products.index') }}">Back</a>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
    <div class="col-md-10">
        <div class="card border-0 shadow-lg my-4">

            <div class="card-header bg-dark">
                <h3 class="text-white text-center">Edit Product</h3>
            </div>
      <form action="{{route('products.update' , $product->id)}}" method="post" enctype="multipart/form-data">
        @method('put')
        @csrf
      <div class="card-body">
            <div class="mb-3">
                <label for="name" class="form-lablel h5">Name</label>
                <input value="{{ old('name' , $product->name ) }}"  type="text" class="@error('name') is-invalid @enderror form-control form-control-lg" placeholder="Name"
                name="name">
                @error('name')
                <p class="invalid-feedback">{{ $message }}</p>
                @enderror
            </div>
            <div class="mb-3">
                <label for="sku" class="form-lablel h5">Sku</label>
                <input value="{{ old('sku' , $product->sku) }}" type="text" class="@error('sku') is-invalid @enderror form-control form-control-lg" placeholder="Sku"
                name="sku">
                @error('sku')
                <p class="invalid-feedback">{{ $message }}</p>
                @enderror
            </div>
            <div class="mb-3">
                <label for="price" class="form-lablel h5">Price</label>
                <input value="{{ old('price' , $product->price) }}" type="text" class="@error('price') is-invalid @enderror form-control form-control-lg" placeholder="Price"
                name="price">
                @error('price')
                <p class="invalid-feedback">{{ $message }}</p>
                @enderror
            </div>
            <div class="mb-3">
                <label for="description" class="form-lablel h5"> Description</label>
                <textarea  cols="30" rows="5" class="form-control" placeholder="Description"
                name="description">{{ old('description' , $product->description) }}</textarea>
            </div>
            <div class="mb-3">
                <label for="image" class=" form-lablel h5">Image</label>
                <input type="file" class="form-control form-control-lg" placeholder="Image"
                name="image">
                @if ($product->image != "")
              <img class="w-50 my-3" src="{{ asset('uploads/products/'. $product->image)}}" alt="">
                @endif
            </div>
            <div class="d-grid">
                <button  class="btn btn-lg btn-primary">Update</button>
            </div>
         </div>
      </form>

        </div>
    </div>
</div>
@endsection
