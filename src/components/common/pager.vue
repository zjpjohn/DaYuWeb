<template>
    <div>
        <div class="paginate-container">
            <ul class="paginate">
                <li>
                    <a href="#" class="paginate-disabled">Previous</a>
                </li>
                <li>
                    <a href="#" class="paginate-active">1</a>
                </li>
                <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">3</a>
                </li>
                <li>
                    <a href="#">...</a>
                </li>
                <li>
                    <a href="#">100</a>
                </li>
                <li>
                    <a href="#">Next</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.paginate-active {
    background: #0366D6!important;
    color: #FFFFFF!important
}

.paginate-disabled {
    color: #D4D5D3!important;
    cursor: default!important;
    background: #FFFFFF!important
}

.paginate-container {
    clear: both;
    padding-top: 60px;
}

.paginate {
    margin: auto;
    height: 50px;
    width: 60%
}

.paginate li {
    float: left;
}

.paginate li a {
    border: 1px solid #E1E4E8;
    padding: 10px 12px;
    display: block;
    color: #0366D6
}

.paginate li a:hover {
    background: #E7E7E7
}

.paginate li:first-child a {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}

.paginate li:last-child a {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
</style>
