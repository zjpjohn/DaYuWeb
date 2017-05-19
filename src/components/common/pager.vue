<template>
    <div>
        <div>
            <ul class="pager">
                <li>
                    <a href="#" class="pager-disabled">Previous</a>
                </li>
                <li>
                    <a href="#" class="pager-active">1</a>
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
.pager-active {
    background: #0366D6!important;
    color: #FFFFFF!important
}
.pager-disabled{
    color: #D4D5D3!important;
    cursor: default!important;
    background: #FFFFFF!important
}
.pager {
    margin: auto;
    height: 50px;
    width: 60%;
    margin-top: 60px;
}

.pager li {
    float: left;
}

.pager li a {
    border: 1px solid #E1E4E8;
    padding: 10px 12px;
    display: block;
    color: #0366D6
}

.pager li a:hover {
    background: #E7E7E7
}

.pager li:first-child a {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}

.pager li:last-child a {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
</style>
