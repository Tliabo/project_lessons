<h3>Admin Users</h3>
<table class="table">
    <thead>
    <tr>
        <th scope="col">ROWID</th>
        <th scope="col">Firstname</th>
        <th scope="col">Lastname</th>
        <th scope="col">E-Mail</th>
    </tr>
    </thead>
    <tbody>
    <?php
    foreach ($this->viewParams['adminUsers'] as $category): ?>
        <tr>
            <th scope="row"><?= $category['rowid'] ?></th>
            <td><?= $category['firstname'] ?></td>
            <td><?= $category['lastname'] ?></td>
            <td><?= $category['email'] ?></td>
        </tr>
    <?php
    endforeach; ?>
    </tbody>
</table>
