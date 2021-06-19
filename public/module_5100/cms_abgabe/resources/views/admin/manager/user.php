
<h2 class="text-center mt-3">User Manager</h2>
<div class="row">
    <div class="col-sm-2">
        <div class="list-group">
            <a href="/admin/usermanager/addAdmin" class="list-group-item list-group-item-action bg-primary" role="button">
                Add Admin User
            </a>
        </div>
    </div>
    <div class="col">
        <?= $this->adminUser->getForm() ?>
    </div>
</div>
