<div class="nav-collapse">
	<ul class="nav">
    <li <?php if ($activeTab == "home") echo "class=\"active\" "?>><a href="<?= site_url()?>">Home</a></li>
    <li class="dropdown">
    <a href="#"
          class="dropdown-toggle"
          data-toggle="dropdown">
          Railways
          <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
      <?= $railways ?>
    </ul>
  </li>
    </ul>
</div><!--/.nav-collapse -->