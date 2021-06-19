<h3>Categories</h3>
<table class="table">
    <thead>
    <tr>
        <th scope="col">ROWID</th>
        <th scope="col">Name</th>
    </tr>
    </thead>
    <tbody>
    <?php
    foreach ($this->viewParams['categories'] as $category): ?>
        <tr>
            <th scope="row"><?= $category['rowid'] ?></th>
            <td><?= $category['name'] ?></td>
        </tr>
    <?php
    endforeach; ?>
    </tbody>
</table>
