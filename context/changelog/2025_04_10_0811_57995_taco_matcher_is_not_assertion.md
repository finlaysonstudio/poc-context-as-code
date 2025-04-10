# taco matcher is not assertion

<Goal>
Confirm taco matcher `not` assertions work
</Goal>

<Files>
packages/testkit/src/matchers/toBeTaco.ts
packages/testkit/src/matchers/toBeTaco.spec.ts
</Files>

<Reference>
context/lib/www/Jest_Custom_Matchers.md
</Reference>

<Description>
## Issue 1: remove promise

The taco spec gives this warning:

> Argument of type '{ isNot: false; }' is not assignable to parameter of type '{ isNot: boolean; promise: string; }'.
>  Property 'promise' is missing in type '{ isNot: false; }' but required in type '{ isNot: boolean; promise: string; }'.ts(2345)
> toBeTaco.ts(6, 27): 'promise' is declared here.
> 
> this: { isNot: boolean; promise: string }

toBeTaco expects promise but doesn't use it; remove it.

## Issue 2: test isNot

Write tests to ensure `not` functions correctly.
If it is possible to write tests we expect to fail, do that.
If the tests fail, update toBeTaco to pass them.
</Description>
